import React from 'react'

const QuizError = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-illustration-download-in-svg-png-gif-file-formats--warning-alert-danger-page-not-found-nallow-pack-people-illustrations-6983265.png?f=webp" alt="" className='mx-auto' />
        <h1 className=' font-medium dark:text-white text-center text-4xl '>
            Something went wrong!.Try again
        </h1>
        <div className='mt-8 flex items-center justify-center gap-10'>
    
    <button   className='px-6 py-3 text-white bg-primary font-semibold rounded-lg   hover:cursor-pointer'>
    Try Again
    </button>
    <button    className='px-6 py-3 text-primary  border-primary border-2 font-semibold rounded-lg  disabled:border-gray-700/20 disabled:text-gray-700'>
   Back to Home
    </button>
    </div>
    </div>
  )
}

export default QuizError