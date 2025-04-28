import React from 'react'
import Container from '../component/container/Container'
import RankingTableCard from '../component/cards/RankingTableCard'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const RankingPage = () => {

  const headings = [
    "Rank",
    "Player",
    "Correct(%)",
    "Points",
    ""
  ]
  return (
    <div>
      <Container className=''>
         <h1 className='mt-5 text-3xl text-black font-semibold'>Ranking Board</h1>
<div className="mt-10 relative overflow-x-auto  ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className=" text-gray-800   bg-purple-50  ">
            <tr>
               {
                headings.map(head=> <th scope="col" className="px-6 py-3">
                  {head}
              </th>)
               }
              
            </tr>
        </thead>
        <tbody>

             <tr className="bg-primary border-b  border-gray-200">
              <th scope="row" className="px-6 py-4 text-xl text-white  ">
                <p>1</p>
              </th>
              <td className="px-6 py-4 min-w-[150px]">
              <div className='flex flex-col md:flex-row  md:items-center gap-2 '>
                  <img src="https://play-lh.googleusercontent.com/8OkZHhe9B39oVMR6K1nYJXfWn6lbmlb9yUEYJr3ULgF0ZiI5ZEmq_AIJncsvscoXCh0=w526-h296-rw" alt="" className='size-10 rounded-md' />
                  <div >
                      <p className='font-medium text-white text-lg'>Siam Hasan</p>
                      <p className='text-gray-100'>@siam622</p>
                  </div>
          
              </div>
              </td>
              <td className="px-6 py-4">
              <p className='text-lg font-medium text-gray-100'>70%</p>
              </td>
              <td className="px-6 py-4">
              <p className='text-lg font-medium text-gray-50'>7637662</p>
              </td>
              <td className="px-6 py-4">
           
              </td>
          </tr>

        {
          Array.from({length:10}).map((_,index)=>(
            <RankingTableCard key={index}/>
          ))
        }
        </tbody>
    </table>
</div>

      </Container>
    </div>
  )
}

export default RankingPage