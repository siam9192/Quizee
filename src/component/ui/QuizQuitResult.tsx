import React from 'react'
import Container from '../container/Container'

const QuizQuitResult = () => {
  return (
    <Container className='flex flex-col justify-center items-center h-[80vh]'>
  
   
    <div className="mt-3 text-center ">
      <h1 className="text-4xl md:text-6xl text-red-500 font-semibold text-center ">x You are quit x</h1>
    
<div className="space-y-2 mt-5">
<p className="font-medium">
    You have loss
  </p>
  <h1 className='text-5xl font-bold  text-red-500'>
   -30
  </h1>
  
  <p className="font-medium">
      Points
  </p>
  
  <h2 className='text-xl font-medium'>Category: <span className='text-secondary'>General knowladge</span></h2>
  <h2 className='text-xl font-medium'>Difficulty: <span className='text-secondary'>Hard</span></h2>
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
   
   </Container>

  )
}

export default QuizQuitResult