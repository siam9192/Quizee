import { useEffect, useState } from 'react'
import { EDifficulty, TDifficulty } from '../../types/util.type'
import { useNavigate } from 'react-router-dom'

interface IProps {
  category:string|null,
  difficulty:TDifficulty,
  totalQuestions?:number,
  timeMinutes:number
}

const QuizProccedButton = (props:IProps) => {
   const [isOpen,setIsOpen] = useState(false)
   const quizRules = [
    "Read each question carefully before answering",
    "No use of external help or devices during the quiz",
    "Answer within the given time limit",
    "You cannot go back to previous questions",
    "Each correct answer earns you points; no negative marking",
     "You have to get minimum 30% point to pass the quiz ",
       "Finish the quiz before the give time ends up otherwise you will consider as timeout ",
        "If you want you can quit the quiz at any time"
  ];

  useEffect(()=>{
    if(isOpen){
      document.body.style.overflow = "hidden"
    }
    else  document.body.style.overflow = ""
  },[isOpen])

  const navigate = useNavigate();

  const handelStartQuiz = ()=>{
    const searchParams =  new URLSearchParams()
    // searchParams.append()
    navigate('/quiz')
  }

  return (
  <>
    <button  onClick={()=>setIsOpen(true)} className="px-6 py-3 text-lg hover:bg-secondary bg-primary text-white rounded-full mx-auto">
    Procced
     </button>
          {
            isOpen ?
            <div onClick={()=>setIsOpen(false)} className='bg-gray-900/20 fixed inset-0 flex  justify-center items-center'>
               <div onClick={(e)=>e.stopPropagation()} className=' w-[90%] md:w-10/12 lg:w-[60%]  max-w-7xl bg-white dark:bg-dark-secondary min-h-60 rounded-lg drop-shadow-2xl space-y-4 p-10 '>
               <div  className='md:grid   grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  break-words md:block hidden'>
                <div className='p-4 border-2 rounded-lg border-secondary bg-gray-100 dark:bg-dark'>
                  <h2 className='font-medium text-gray-800 dark:text-gray-100'>Category</h2>
                  <p className='text-center text-xl font-medium dark:text-gray-200'>
                    {props.category}
                  </p>
                </div>
                <div className='p-4 border-2 rounded-lg border-secondary bg-gray-100 dark:bg-dark'>
                  <h2 className='font-medium text-gray-800 dark:text-gray-100'>Difficulty</h2>
                  <p className='text-center text-xl font-medium dark:text-gray-200'>
                    {props.difficulty}
                  </p>
                </div>
                <div className='p-4 border-2 rounded-lg border-secondary bg-gray-100 dark:bg-dark'>
                  <h2 className='font-medium text-gray-800 dark:text-gray-100'>Total Questions</h2>
                  <p className='text-center text-xl font-medium dark:text-gray-200'>
                    {20}
                  </p>
                </div>
               
                <div className='p-4 border-2 rounded-lg border-secondary bg-gray-100 dark:bg-dark'>
                  <h2 className='font-medium text-gray-800 dark:text-gray-100'>Time </h2>
                  <p className='text-center text-xl font-medium dark:text-gray-200'>
                    {props.timeMinutes} Minutes
                  </p>
                </div>
              </div>
              <div className=' flex  items-center flex-wrap gap-2 space-y-2 md:hidden'>
        <h2 className='text-xl font-medium dark:text-gray-50'>Category: <span className='text-secondary'>{props.category}</span></h2>
        <h2 className='text-xl font-medium dark:text-gray-50'>Difficulty: <span className='text-secondary'>{props.difficulty}</span></h2>
     
        <h2 className='text-xl font-medium dark:text-gray-50'>Questions : <span className='text-secondary'>{props.totalQuestions}</span></h2>
        <h2 className='text-xl font-medium dark:text-gray-50'>Time: <span className='text-secondary'>{props.totalQuestions} Minutes</span></h2>
     
       </div>
               <div className='mt-10'>
        <h3 className='text-2xl font-medium dark:text-gray-50'>
          Quiz Rules
          :
        </h3>
        <div className='mt-5 space-y-1'>
          {
           quizRules.map((rule,index)=>(
              <p key={index} className='text-gray-800 dark:text-gray-100'>
             <span className='text-secondary'>
             {index+1}. </span>{rule}
              </p>
            ))
          }
        </div>
       </div>
    
                <div>
                    <div className='mt-5'>
                    <div className='flex items-center justify-end gap-2'>
      <button  className='px-6 py-3 text-primary  border-primary border-2 font-semibold rounded-lg  disabled:border-gray-700/20 disabled:text-gray-700'>
       Cancel
        </button>
        <button onClick={handelStartQuiz}  className='px-6 py-3 text-white   bg-primary   font-semibold rounded-lg disabled:bg-gray-700/20 disabled:text-gray-700 '>
       Start Quiz
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

export default QuizProccedButton