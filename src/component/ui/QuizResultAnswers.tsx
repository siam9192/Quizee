import React, { useState } from 'react'

const QuizResultAnswers = () => {
    const [isOpen,setIsOpen] = useState(false)
    
    const quizAnswers = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris",
            myAnswer: "London"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Mars",
            myAnswer: "Mars"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"],
            correctAnswer: "Shakespeare",
            myAnswer: "Hemingway"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
            myAnswer: "4"
        },
        {
            question: "What gas do plants breathe in?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: "Carbon Dioxide",
            myAnswer: "Oxygen"
        },
        {
            question: "What is the largest ocean?",
            options: ["Atlantic", "Pacific", "Indian", "Arctic"],
            correctAnswer: "Pacific",
            myAnswer: "Pacific"
        },
        {
            question: "Which country gifted the Statue of Liberty to the USA?",
            options: ["France", "Spain", "Italy", "Germany"],
            correctAnswer: "France",
            myAnswer: "Germany"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Michelangelo", "Van Gogh", "Da Vinci", "Picasso"],
            correctAnswer: "Da Vinci",
            myAnswer: "Da Vinci"
        },
        {
            question: "What is H2O commonly known as?",
            options: ["Salt", "Water", "Sugar", "Oxygen"],
            correctAnswer: "Water",
            myAnswer: "Water"
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "7",
            myAnswer: "6"
        },
        {
            question: "What is the boiling point of water?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            correctAnswer: "100°C",
            myAnswer: "100°C"
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correctAnswer: "Nile",
            myAnswer: "Amazon"
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            options: ["Tiger", "Elephant", "Lion", "Giraffe"],
            correctAnswer: "Lion",
            myAnswer: "Lion"
        },
        {
            question: "In which country were the Olympic Games invented?",
            options: ["Italy", "Greece", "Egypt", "China"],
            correctAnswer: "Greece",
            myAnswer: "Italy"
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Oxygen", "Gold", "Silver", "Iron"],
            correctAnswer: "Oxygen",
            myAnswer: "Oxygen"
        },
        {
            question: "How many legs does a spider have?",
            options: ["6", "8", "10", "12"],
            correctAnswer: "8",
            myAnswer: "8"
        },
        {
            question: "Who discovered gravity?",
            options: ["Newton", "Einstein", "Galileo", "Curie"],
            correctAnswer: "Newton",
            myAnswer: "Galileo"
        },
        {
            question: "Which is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correctAnswer: "Blue Whale",
            myAnswer: "Blue Whale"
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            correctAnswer: "2",
            myAnswer: "3"
        },
        {
            question: "Which language is primarily spoken in Brazil?",
            options: ["Spanish", "Portuguese", "French", "English"],
            correctAnswer: "Portuguese",
            myAnswer: "Portuguese"
        }
    ];
    

  const optionsIndex:string[] = ["A","B","C","D"]
   const totalQuestions  = quizAnswers.length;
   const totalCorrectAnswers  =  quizAnswers.filter(_=>_.correctAnswer === _.myAnswer).length
  return (
  <>
    <button onClick={()=>setIsOpen(true)} className=' font-medium  text-secondary  border-b-2 border-secondary'>
        View answers
        </button>
{
    isOpen ?
    <div onClick={()=>setIsOpen(false)} className='bg-gray-900/20 fixed inset-0 flex justify-center items-center'>
    <div onClick={(e)=>e.stopPropagation()} className='w-full lg:w-1/2 bg-white dark:bg-dark-secondary min-h-60 max-h-full lg:max-h-[90vh]  overflow-y-auto rounded-lg drop-shadow-2xl space-y-4 p-10 text-start hide-scrollbar'>
 
     <div>
     <div className="space-y-2 mt-5 text-center">
     <h1 className='text-5xl font-bold  text-secondary'>
         <span className='text-green-500'>
         {totalCorrectAnswers}<span className="text-primary">/{totalQuestions}</span>
          </span>
        </h1>
     <h1 className='text-xl  dark:text-white  '>
         You have scored <span className="text-green-500 font-medium">80</span> points
        </h1>
  

    
     
     </div>
<div className='mt-5'>
    {
      quizAnswers.map((_,index)=>(
         <div className='mt-4'>
          <p className='font-medium text-bl'><span className='text-secondary text-xl'>
          {index+1}.</span> <span className='dark:text-gray-50'>{_.question}</span></p>
          <div className='mt-2'>
            <div className='space-y-3'>
                <div className={`p-2  rounded-md  ${_.correctAnswer === _.myAnswer ?"p-2 bg-green-600 text-white" :"p-2  rounded-md bg-red-500 text-white"}`}>
                <p >My Answer: <span >({optionsIndex[_.options.indexOf(_.myAnswer )]}) {_.myAnswer}</span></p>
                </div>
                <div className='p-2  rounded-md bg-primary text-white'>
                <p>Correct Answer :({optionsIndex[_.options.indexOf(_.correctAnswer )]})  {_.correctAnswer}</p>
                </div>
                 
            </div>
          </div>
         </div>
        ))
    }
</div>


         <div className='mt-5'>
         <div className='flex items-center justify-end gap-2'>
<button onClick={()=>setIsOpen(false)}  className='px-6 py-3 text-primary  border-primary border-2 font-semibold rounded-lg  disabled:border-gray-700/20 disabled:text-gray-700'>
Close
</button>

</div>
         </div>
     </div>
    </div>
 </div>
 :
 null
}
  </>
  )
}

export default QuizResultAnswers