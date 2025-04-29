import React, { useState } from 'react'
import { IQuizQuestion } from '../../types/question.type';
interface IProps {
  questions:IQuizQuestion[],
  userAnswers:string[]
}

const QuizResultAnswers = (props:IProps) => {
    const [isOpen,setIsOpen] = useState(false)
    
    const quizAnswers = props.questions.map((q,index)=>(
        {
            question: q.question,
            options: [q.incorrect_answers,q.correct_answer],
            correctAnswer: q.correct_answer,
            myAnswer: props.userAnswers[index]
        }
    ));
    

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
                <p >My Answer: <span > {_.myAnswer}</span></p>
                </div>
                <div className='p-2  rounded-md bg-primary text-white'>
                <p>Correct Answer : {_.correctAnswer}</p>
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