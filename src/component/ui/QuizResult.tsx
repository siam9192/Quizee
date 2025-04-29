import { useNavigate } from "react-router-dom"
import { IQuizQuestion } from "../../types/question.type"
import Container from "../container/Container"
import QuizResultAnswers from "./QuizResultAnswers"
interface IProps {
  questions:IQuizQuestion[],
  userAnswers:string[]
}

const QuizResult = (props:IProps) => {

  const images = {
    Excellent:"https://cdni.iconscout.com/illustration/premium/thumb/best-student-illustration-download-in-svg-png-gif-file-formats--online-education-award-reward-educational-trophy-pack-school-illustrations-5761550.png",
    Good:"https://cdni.iconscout.com/illustration/premium/thumb/graduation-illustration-download-in-svg-png-gif-file-formats--online-student-jumping-course-education-pack-school-illustrations-5761548.png",
    Passed:"https://cdni.iconscout.com/illustration/premium/thumb/girl-passed-exam-illustration-download-in-svg-png-gif-file-formats--online-result-award-reward-certificate-education-pack-school-illustrations-5761551.png",
    Failed:"https://cdni.iconscout.com/illustration/premium/thumb/depressed-boy-showing-his-exam-results-illustration-download-in-svg-png-gif-file-formats--failure-student-failed-books-study-set-01-pack-school-education-illustrations-8041538.png"
  }

  const totalCorrectAnswers =  props.questions.map((_,index)=>_.correct_answer === props.userAnswers[index]).filter(_=>_).length;

  const correctPercentage =  (totalCorrectAnswers/props.questions.length)*100
  
  const resultStatus = 
  correctPercentage >= 80 
    ? "Excellent" 
    : correctPercentage >= 50 
    ? "Good" 
    : correctPercentage >= 30 
    ? "Passed" 
    : "Failed";

const resultHeading: Record<string, string> = {
  Excellent: "Excellent, what a score! 🎉",
  Good: "Good job, keep practicing! 👍",
  Passed: "You passed, well done! 🎯",
  Failed: "You failed, better luck next time! 💪",
};

const navigate = useNavigate();

const handelStartAgain = ()=>{
  
}
  return (
 
        <Container className="  overflow-hidden ">
          <div className="mt-5 md:mt-10 animate-arrive-r-l ">
          {/* <img src="/src/assets/trophy.png" alt="" className=" w-[200px] md:w-[300px]  rounded-full mx-auto" />
           */}

           <img src={images[resultStatus]} alt="" className=" w-[200px] md:w-[300px]   mx-auto"  />

          <div className="mt-3 text-center ">
            <h1 className={`text-4xl md:text-6xl ${resultStatus === "Failed"?"text-red-600":" text-primary dark:text-green-400"} font-semibold text-center`}>{resultHeading[resultStatus]}</h1>
          
     <div className="space-y-2 mt-5">
     <h1 className='text-xl  dark:text-white  '>
         You have scored <span className={`${resultStatus === "Failed"?"text-red-600":"text-green-500 font-medium"}`}>{totalCorrectAnswers*2}</span> points
        </h1>
        <h1 className='text-5xl font-bold  text-secondary'>
         <span className={`${resultStatus === "Failed"?"text-red-600":"text-green-500 font-medium"}`}>
         {totalCorrectAnswers}
          </span>
          <span className="text-secondary">/</span>
          <span className="text-primary dark:text-white">{props.questions.length}</span>
        </h1>

        <p className="font-medium dark:text-gray-100">
            Questions is correct
        </p>
        
        <h2 className='text-xl font-medium dark:text-gray-100'>Category: <span className='text-secondary'>General knowladge</span></h2>
        <h2 className='text-xl font-medium dark:text-gray-100'>Difficulty: <span className='text-secondary'>Hard</span></h2>
      <QuizResultAnswers {...props}/>
     </div>
     <div className='mt-8 flex items-center justify-center gap-10'>
    
        <button onClick={()=>navigate('')}  className='px-6 py-3 text-white bg-primary font-semibold rounded-lg   hover:cursor-pointer'>
         Start Again
        </button>
        <button  className='px-6 py-3 text-primary  border-primary border-2 font-semibold rounded-lg  disabled:border-gray-700/20 disabled:text-gray-700'>
       Back to Home
        </button>
        </div>
          </div>
          </div>
        </Container>
   
  )
}

export default QuizResult