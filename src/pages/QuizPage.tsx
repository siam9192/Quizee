import  { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../component/container/Container';
import QuitQuizButton from '../component/ui/QuitQuizButton';
import QuizResult from '../component/ui/QuizResult';
import QuizTimeoutResult from '../component/ui/QuizTimeoutResult';
import { IQuizQuestion, IRetrieveQuizQuestion } from '../types/question.type';
import config from '../config';
import {v4} from 'uuid'
import { categories, questionOptionsIndex, shuffleArray } from '../utils/constant';
import { formatSeconds } from '../utils/helpers';


function QuizPage() {
  const [questions, setQuestions] = useState<IQuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{id:string,option:string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status,setStatus] = useState<"error"|"ongoing"|'finished'|'timeout'>("ongoing");

  const navigate = useNavigate();
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const searchParams = new URLSearchParams(window.location.search);
  const category = categories.find(_=>_.id  === parseInt(searchParams.get("category")!))
  const difficulty =  searchParams.get("difficulty")
  const timeLimit = (config.timeLimit as any)[difficulty!.toLowerCase()]
  const [remainingTime,setRemainingTime] = useState(timeLimit)
  const hasRun = useRef(false);
  const [refetch,setRefetch] = useState(false)
  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        if (hasRun.current ) return;
        hasRun.current = true;
        setIsLoading(true);
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${config.questionAmount}&category=${category!.id}`
        );
 
        if (!response.ok) {
          throw new Error("Failed to fetch quiz questions.");
        }
  
        const data = await response.json();
        const results = data.results as IRetrieveQuizQuestion[];
  
        // If fewer questions returned than requested, show error
        if (results.length < config.questionAmount) {
          
          throw new Error("Insufficient quiz questions returned.");
        }
  
        const formattedQuestions: IQuizQuestion[] = results.map((item) => ({
          id: v4(),
          category: item.category,
          question: item.question,
          options: shuffleArray([
            item.correct_answer,
            ...item.incorrect_answers,
          ]),
          correct_answer: item.correct_answer,
        }));
  
        setQuestions(formattedQuestions);
        setIsLoading(false)
      
      } catch (error) {
        console.error("Quiz fetch error:", error);
        setIsLoading(false)
        setStatus("error");
      }
    };
  
    fetchQuestions();
  }, [refetch]);
  
  

  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      const confirmationMessage = 'Are you sure you want to leave the page?';
      e.preventDefault();
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

useEffect(()=>{
  if(remainingTime === 0 || isLoading){
    if(remainingTime === 0) setStatus('timeout')
    return
  }

  const interval =  setInterval(()=>{

     setRemainingTime((p:number)=>{
      if(p-1 <1){
        setStatus('timeout')
      }
      return  p-1
     })
  },1000)

  return ()=>{
    clearInterval(interval)
  }
},[remainingTime,isLoading])

  const goNextQuestion = () => {
    if (currentQuestionIndex + 1 >= questions.length) return;

    setIsLoading(true);
    // setTimeout(() => {
     
    // }, 200);
    setIsLoading(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const goPrevQuestion = () => {
    if (currentQuestionIndex - 1 < 0) return;

    setIsLoading(true);
    // setTimeout(() => {
   
    // }, 200);
    setIsLoading(false);
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleChooseOption = (id: string, chosenOption: string) => {
    setAnswers((prevAnswers) => {
      const answerExists = prevAnswers.some((answer) => answer.id === id);
  
      if (answerExists) {
        return prevAnswers.map((answer) =>
          answer.id === id ? { ...answer, option: chosenOption } : answer
        );
      } else {
        return [...prevAnswers, { id, option: chosenOption }];
      }
    });
  };
  

  const handelStartAgain = ()=>{
   setIsLoading(true)
   setQuestions([])
   setAnswers([])
   setCurrentQuestionIndex(0)
   setRemainingTime(timeLimit)
  hasRun.current =  false
   setRefetch(!refetch)
   setStatus("ongoing")
  }
  
  if(isLoading) {
    return <div className='h-[60vh] flex justify-center items-center'>
    <div className='loader'></div>
  </div>
  }

  // Loading or Finished/Timeout states
  else if (status === "timeout") {
  return <QuizTimeoutResult/>
  }
  else if (status === "finished") return <QuizResult questions={questions} userAnswers={answers} startAgainFn = {handelStartAgain} />;
  // if (isTimeout) return <QuizTimeoutResult />;
  else  if (status === "error"){
    throw new Error()
  }



  const formatTime = formatSeconds(remainingTime)

  return (
    <div className="pt-10 py-10  ">
      <Container>
        <div className="size-fit mx-auto text-center space-y-2">
          <h2 className="text-xl font-medium dark:text-gray-100">
            Category: <span className="text-secondary">General Knowledge</span>
          </h2>
          <h2 className="text-xl font-medium dark:text-gray-100">
            Difficulty: <span className="text-secondary">{difficulty}</span>
          </h2>
          <h1 className="text-5xl font-bold text-primary space-x-2">
            <span className="dark:text-gray-50 text-black">
              {Math.max(answers.length-1,0)}
            </span>
          <span className='text-blue-600'>
           of  
          </span>
            <span className="dark:text-white text-black">{questions.length}</span>
          </h1>
          <p className="font-medium dark:text-gray-100">
            Time Remaining: <span className="text-secondary font-semibold">{formatTime.minutes} Minutes {formatTime.seconds} Seconds</span>
          </p>
        </div>

        <div className={`questions__container  dark:after:hidden ${isLoading ? 'after:block' : 'after:hidden'}`}>
          {questions.map((question, index) => {
          
          const chosenAnswer = answers.find(_=>_.id === question.id) 
         
            return index === currentQuestionIndex ? (
              <div key={index} className="mt-10 lg:mt-20 rounded-xl question">
                <p className="text-center font-medium text-xl dark:text-gray-100">{question.question}</p>

                <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
              {
                  question.options.map((option, optionIdx) => (
                    <div
                      key={optionIdx}
                      onClick={()=>handleChooseOption(question.id,option)}
                      className={`px-3 py-4 border-2 rounded-lg flex gap-2 cursor-pointer 
                        ${chosenAnswer?.option === option
                          ? 'bg-primary text-white border-primary'
                          : 'bg-gray-50 dark:bg-dark-secondary border-primary'
                        }`}
                    >
                      <p className="text-lg font-medium dark:text-gray-100">
                        <span className={`${chosenAnswer?.option === option ? 'text-white' : 'text-secondary'}`}>
                          {questionOptionsIndex[optionIdx]}
                        </span>{' '}
                        {option}
                      </p>
                    </div>
                  ))
              }
                </div>
              </div>
            ) : null;
          })}

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-between items-center gap-2">
            <QuitQuizButton onQuit={() => navigate('/')} />

            <div className="flex items-center gap-2">
              <button
                onClick={goPrevQuestion}
                disabled={isFirstQuestion}
                className="px-6 py-3 text-primary border-2 border-primary font-semibold rounded-lg disabled:border-gray-700/20 disabled:text-gray-700"
              >
                Previous
              </button>

              {isLastQuestion ? (
                <button
                  disabled={!answers[currentQuestionIndex]}
                  onClick={() => setStatus("finished")}
                  className="px-6 py-3 text-white bg-primary font-semibold rounded-lg disabled:bg-gray-700/20 disabled:text-gray-700"
                >
                  Finish
                </button>
              ) : (
                <button
                  disabled={!answers[currentQuestionIndex]}
                  onClick={goNextQuestion}
                  className="px-6 py-3 text-white bg-primary font-semibold rounded-lg disabled:bg-gray-700/20 disabled:text-gray-700"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default QuizPage;
