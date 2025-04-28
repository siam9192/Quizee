import React from 'react'
import Container from '../container/Container'

const QuizTimeoutResult = () => {
  return (
    <Container>
  <div  className='flex flex-col justify-center items-center h-[80vh] animate-arrive-r-l'>
    
   <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-power-off-huge-phone-need-to-take-a-break-from-internet-illustration-download-in-svg-png-gif-file-formats--disconnection-of-technology-loss-people-pack-illustrations-6706743.png" alt="" className=' w-10/12 md:w-1/2' />
    <div className="mt-3 text-center ">
      <h1 className="text-4xl md:text-6xl  font-semibold text-center dark:text-gray-50 ">You are <span className='text-red-500'>timeout~
        !</span></h1>
    
<div className="space-y-2 mt-5">
<p className="font-medium dark:text-gray-100">
   Sorry You can'nt answer in time
  </p>
 
  
  <p className="font-medium text-secondary">
      Best of luck for next time
  </p>
  
  <h2 className='text-xl font-medium dark:text-gray-100'>Category: <span className='text-secondary'>General knowladge</span></h2>
  <h2 className='text-xl font-medium dark:text-gray-100'>Difficulty: <span className='text-secondary'>Hard</span></h2>
</div>
<div className='mt-8 flex items-center justify-center gap-10'>

  <button  className='px-6 py-3 text-white bg-primary font-semibold rounded-lg  disabled:border-gray-700/20 disabled:text-gray-700'>
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

export default QuizTimeoutResult