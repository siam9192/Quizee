
import { CiCoins1, CiEdit } from "react-icons/ci";
import Container from '../component/container/Container'
import { FaRankingStar } from "react-icons/fa6";
import { FaHandSparkles } from 'react-icons/fa';
import { IoIosCheckbox } from "react-icons/io";
const ProfilePage = () => {
    const data = [
        {
            title:"Points",
            value:24450,
            icon:CiCoins1
        },
        {
            title:"Ranking",
            value:20,
            icon:FaRankingStar
        },
       
        {
            title:"Quiz Participants",
            value:220,
            icon:FaHandSparkles
        },
        {
            title:"Correct(%)",
            value:`70%`,
            icon:IoIosCheckbox
        }
    ]
  return (
    <div className='pb-10'>
    <Container>
        <div className='mt-10 size-fit mx-auto space-y-2 '>
         <div className='relative'>
         <img src="https://play-lh.googleusercontent.com/8OkZHhe9B39oVMR6K1nYJXfWn6lbmlb9yUEYJr3ULgF0ZiI5ZEmq_AIJncsvscoXCh0=w526-h296-rw" alt=""  className='size-52 rounded-lg'/>
 <button className='p-2 bg-primary text-white  rounded-full absolute -bottom-1 -right-4 text-2xl'>
 <CiEdit />
 </button>
         </div>
           <div>
           <p className='text-2xl font-medium text-center'>
                Siam Hasan
            </p>
            <p className='-mt-2 text-gray-800 font-medium text-center'>
                @siam773
            </p>
           
           </div>
           <div className='text-center'>
            <h1 className='text-3xl text-primary font-semibold text-center '>{(36543).toLocaleString()}</h1>
            <p className='font-medium -mt-1'>Points</p>
           </div>
        </div>
        <div className='mt-10 grid  md:grid-cols-2 lg:grid-cols-4 gap-4'>
   {
    data.map((_,index)=>(
        <div key={index} className='p-3 border-2 border-primary   rounded-md'>
        <div className='flex items-center gap-2'>
        <span className='text-4xl'>
            <_.icon/>
         </span>
         <p className='text-lg font-medium'>{_.title}</p>
        </div>
        <h1 className='text-4xl text-secondary font-semibold text-center'>
            {(_.value).toLocaleString()}
        </h1>
        </div>
    ))
   }
        </div>
        <div className='mt-10'>
            <h1 className='text-3xl text-black font-medium'>History</h1>
            <div className='mt-5 grid grid-cols-1 gap-2 '>
                {
                    Array.from({length:10}).map((_,index)=>(
                        <div key={index} className='p-4 border-2 border-gray-600/20 rounded-lg relative'>
                           <div>
                           <p className='text-xl '>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, voluptates?
                            </p>
                   <div className='mt-2 flex items-center flex-wrap gap-1 md:gap-2'>
                   <p className=' font-medium '>
                           Category: <span className='text-primary'>
                           Web development
                            </span>
                          </p>
                   <p className=' font-medium '>
                            Start At: <span className='text-primary'>
                            {new Date().toDateString()}
                            </span>
                          </p>
                          <p className=' font-medium '>
                           End At: <span className='text-primary'>
                            {new Date().toDateString()}
                            </span>
                          </p>
                          <p className=' font-medium '>
                         Answer: <span className='text-primary'>
                          10/12
                            </span>
                          </p>
                          <p className=' font-medium '>
                          Status: <span className='text-primary'>
                            Passed
                            </span>
                          </p>
                   </div>
                   <button className='text-black border-2 px-6 py-2 border-primary hover:border-none hover:bg-primary hover:text-white bg-gray-100 rounded-md font-medium float-right'>
                    View Details
                   </button>
                           </div>
                           <p className=' absolute top-2  right-2 font-medium text-2xl text-primary'>
                       +30
                          </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </Container>
    </div>
  )
}

export default ProfilePage 