import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../component/container/Container';
import QuitQuizButton from '../component/ui/QuitQuizButton';
import QuizResult from '../component/ui/QuizResult';
import QuizTimeoutResult from '../component/ui/QuizTimeoutResult';

import { IQuizQuestion } from '../types/question.type';

function QuizPage() {
  const [questions, setQuestions] = useState<IQuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(true);
  const [isTimeout, setIsTimeout] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const navigate = useNavigate();

  const optionsIndex = ['A', 'B', 'C', 'D'];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=20&category=26&difficulty=medium&type=multiple')
      .then(async (res) => {
        if (res.status !== 200) return;
        const data = await res.json();
        setQuestions(data.results);
        setIsQuestionsLoading(false);
      });
  }, []);

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

  const goNextQuestion = () => {
    if (currentQuestionIndex + 1 >= questions.length) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentQuestionIndex((prev) => prev + 1);
    }, 200);
  };

  const goPrevQuestion = () => {
    if (currentQuestionIndex - 1 < 0) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentQuestionIndex((prev) => prev - 1);
    }, 200);
  };

  const handleSelectAnswer = (index: number, answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  // Loading or Finished/Timeout states
  if (isQuestionsLoading) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isQuestionsLoading) return null;
  if (isFinished) return <QuizResult questions={questions} userAnswers={answers} />;
  if (isTimeout) return <QuizTimeoutResult />;

  return (
    <div className="py-10">
      <Container>
        <div className="size-fit mx-auto text-center space-y-2">
          <h2 className="text-xl font-medium dark:text-gray-100">
            Category: <span className="text-secondary">General Knowledge</span>
          </h2>
          <h2 className="text-xl font-medium dark:text-gray-100">
            Difficulty: <span className="text-secondary">Hard</span>
          </h2>
          <h1 className="text-5xl font-bold text-primary">
            <span className="dark:text-gray-50 text-black">
              {currentQuestionIndex + 1}
            </span>
            /
            <span className="text-secondary">{questions.length}</span>
          </h1>
          <p className="font-medium dark:text-gray-100">
            Time Remaining: <span className="text-secondary font-semibold">2 Minutes 4 Seconds</span>
          </p>
        </div>

        <div className={`questions__container ${isLoading ? 'after:block' : 'after:hidden'}`}>
          {questions.map((question, index) => {
            const options = [...question.incorrect_answers, question.correct_answer];

            return index === currentQuestionIndex ? (
              <div key={index} className="mt-10 lg:mt-20 rounded-xl question">
                <p className="text-center font-medium text-xl dark:text-gray-100">{question.question}</p>

                <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
                  {options.map((option, optionIdx) => (
                    <div
                      key={optionIdx}
                      onClick={() => handleSelectAnswer(index, option)}
                      className={`px-3 py-4 border-2 rounded-lg flex gap-2 cursor-pointer 
                        ${answers[index] === option
                          ? 'bg-primary text-white border-primary'
                          : 'bg-gray-50 dark:bg-dark-secondary border-primary'
                        }`}
                    >
                      <p className="text-lg font-medium dark:text-gray-100">
                        <span className={`${answers[index] === option ? 'text-white' : 'text-secondary'}`}>
                          {optionsIndex[optionIdx]}.
                        </span>{' '}
                        {option}
                      </p>
                    </div>
                  ))}
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
                  onClick={() => setIsFinished(true)}
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
