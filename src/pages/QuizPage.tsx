import React, { useEffect, useState } from 'react'
import Container from '../component/container/Container'
import QuitQuizButton from '../component/ui/QuitQuizButton';
import QuizResult from '../component/ui/QuizResult';
import QuizQuitResult from '../component/ui/QuizQuitResult';
import QuizTimeoutResult from '../component/ui/QuizTimeoutResult';

function QuizPage() {

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Tolkien", "Rowling"],
      answer: "Shakespeare"
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C"
    },
    {
      question: "Which gas do plants absorb?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
      answer: "Carbon Dioxide"
    },
    {
      question: "What color is chlorophyll?",
      options: ["Red", "Green", "Yellow", "Blue"],
      answer: "Green"
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "English", "Portuguese", "French"],
      answer: "Portuguese"
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific"
    },
    {
      question: "Which number is a prime number?",
      options: ["9", "15", "17", "21"],
      answer: "17"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      answer: "Au"
    },
    {
      question: "Which planet has rings?",
      options: ["Earth", "Mars", "Saturn", "Venus"],
      answer: "Saturn"
    },
    {
      question: "In which year did World War II end?",
      options: ["1942", "1945", "1950", "1939"],
      answer: "1945"
    },
    {
      question: "How many legs does a spider have?",
      options: ["6", "8", "10", "12"],
      answer: "8"
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
      answer: "Hydrogen"
    },
    {
      question: "What is the tallest mountain on Earth?",
      options: ["K2", "Kilimanjaro", "Everest", "Denali"],
      answer: "Everest"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile"
    },
    {
      question: "What does 'CPU' stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Thailand", "Japan", "Korea"],
      answer: "Japan"
    }
  ];
  
  
  const [currentQuestionIndex,setCurrentQuestionIndex]=  useState(0)
  const [answers,setAnswers] = useState<string[]>([])
  const [isLoading,setIsLoading] =  useState(false);
  const [isTimeout,setIsTimeout] = useState(false)
  const [isFinished,setIsFinished] = useState(false)
  const [isQuitted,setIsQuitted] =  useState(false)
  

  
// Function to go to the next question
const goNextQuestion = () => {
  // If already at the last question, do nothing
  if (currentQuestionIndex + 1 > questions.length) return;

  setIsLoading(true); // Show loading animation or spinner
  setTimeout(() => {
    setIsLoading(false); // Stop loading after a short delay
    setCurrentQuestionIndex(p => p + 1); // Move to next question
  }, 200); // Delay of 200 milliseconds
};

// Function to go to the previous question
const goPrevQuestion = () => {
  // If already at the first question, do nothing
  if (currentQuestionIndex - 1 < 0) return;

  setIsLoading(true); // Show loading animation or spinner
  setTimeout(() => {
    setIsLoading(false); // Stop loading after a short delay
    setCurrentQuestionIndex(p => p - 1); // Move to previous question
  }, 200); // Delay of 200 milliseconds
};


const optionsIndex:string[] = ["A","B","C","D"]



const isFirstQuestion =  currentQuestionIndex === 0
const isLastQuestion =  currentQuestionIndex === questions.length-1

// return <QuizTimeoutResult/>

const handelSelectAnswer = (index:number,answer:string)=>{
  answers[index] = answer
  setAnswers([...answers]);
}


if(!isFinished) return <QuizResult/>
else if(isQuitted) return <QuizQuitResult/>
else if(isTimeout) return  <QuizTimeoutResult/>


  return (
   <div className='py-10 '>
     <Container>
       <div className='size-fit mx-auto text-center space-y-2'>
        <h2 className='text-xl font-medium dark:text-gray-100'>Category: <span className='text-secondary'>General knowladge</span></h2>
        <h2 className='text-xl font-medium  dark:text-gray-100'>Difficulty: <span className='text-secondary'>Hard</span></h2>
        <h1 className='text-5xl font-bold  text-primary  '>
         <span className='dark:text-gray-50 text-black'>
         {currentQuestionIndex+1}</span>/<span className=' text-secondary'>
         {questions.length}
          </span>
        </h1>
        <p className='font-medium  dark:text-gray-100'>
         Time Remaining: <span className=' text-secondary font-semibold   '>2 Minutes 4 Seconds</span>
        </p>
       </div>
      <div className={`questions__container after:hidden ${isLoading ? 'after:block':'after:hidden '}`}>
    {
      questions.map((question,index)=>{
      return  index ===  currentQuestionIndex ?
     <div key={index} className='mt-10 lg:mt-20   rounded-xl  question'>
        <p className='text-center font-medium text-xl  dark:text-gray-100'>
        {
          question.question
        }
        </p>
        <div className='mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 '>
        {
          question.options.map((option,optionIdx)=>(
            <div key={optionIdx} onClick={()=>handelSelectAnswer(index,option)} className={`px-3 py-4 border-2 rounded-lg border-primary hover:cursor-pointer flex  gap-2 ${answers[index] === option ?" bg-primary text-white":" bg-gray-50 dark:bg-dark-secondary"} `}>
            {/* <input type="radio"  className='size-6 accent-primary'/> */}
            <p className='text-lg font-medium  dark:text-gray-100'>
            <span className={` ${ answers[index] === option ?'text-white':'text-secondary'}`}>{optionsIndex[optionIdx]}.</span> {option}
            </p>
            </div>
          ))
        }
        </div>
       </div>
       :
       null
      })
    }


       <div className='mt-10 flex justify-between items-center gap-2'>
       <QuitQuizButton onQuit={()=>setIsQuitted(true)}/>
      <div className='flex items-center gap-2'>
      <button onClick={goPrevQuestion} disabled={isFirstQuestion} className='px-6 py-3 text-primary  border-primary border-2 font-semibold rounded-lg  disabled:border-gray-700/20 disabled:text-gray-700'>
        Previous
        </button>
    
       {
        isLastQuestion ?
        <button disabled={!answers[currentQuestionIndex]} onClick={()=>setIsFinished(true)} className='px-6 py-3 text-white   bg-primary   font-semibold rounded-lg disabled:bg-gray-700/20 disabled:text-gray-700'>
        Finish
          </button>
          :
          <button disabled={isLastQuestion||!answers[currentQuestionIndex]} onClick={goNextQuestion} className='px-6 py-3 text-white   bg-primary   font-semibold rounded-lg disabled:bg-gray-700/20 disabled:text-gray-700'>
          Next
           </button>
       }
       </div>
       </div>
      </div>
      </Container>
   </div>
  )
}

export default QuizPage