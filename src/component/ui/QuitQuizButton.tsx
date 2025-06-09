import { useState } from 'react'

interface IProps {
    onQuit():void
}
const QuitQuizButton = (props:IProps) => {
    const [isOpen,setIsOpen] = useState(false)

    const handelQuit =  ()=>{
        setIsOpen(false)
        props.onQuit()
        
    }
  return (
   <>
    <button onClick={()=>setIsOpen(true)} className='px-6 py-3 text-red-500   border-red-500 border-2   font-semibold rounded-lg'>
     Quit
        </button>

        {
            isOpen ?
            <div onClick={()=>setIsOpen(false)} className='bg-gray-900/20 fixed inset-0 flex justify-center items-center'>
               <div onClick={(e)=>e.stopPropagation()} className='w-10/12 lg:w-1/2 bg-white dark:bg-dark-secondary min-h-60 rounded-lg drop-shadow-2xl space-y-4 p-10'>
               <img src="/src/assets/exit.png" alt="" className='md:w-1/2 mx-auto' />
                <div>
                    <h1 className='text-2xl md:text-3xl font-medium text-center dark:text-gray-50'>You're going to quit   😓</h1>
                    <div className='mt-5'>
                    <div className='flex items-center justify-end gap-2'>
      <button  className='px-6 py-3 text-primary  border-primary border-2 font-semibold rounded-lg  disabled:border-gray-700/20 disabled:text-gray-700'>
       Cancel
        </button>
        <button onClick={handelQuit}  className='px-6 py-3 text-white   bg-red-500   font-semibold rounded-lg disabled:bg-gray-700/20 disabled:text-gray-700'>
       I Want to Quit
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

export default QuitQuizButton