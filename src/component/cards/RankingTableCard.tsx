import { HiOutlineDotsHorizontal } from 'react-icons/hi'

function RankingTableCard() {
  return (
    <tr className="bg-white border-b  border-gray-200">
    <th scope="row" className="px-6 py-4 text-xl text-primary fo-me dark:text-white">
      <p>1</p>
    </th>
    <td className="px-6 py-4 min-w-[150px]">
    <div className='flex flex-col md:flex-row  md:items-center gap-2 '>
        <img src="https://play-lh.googleusercontent.com/8OkZHhe9B39oVMR6K1nYJXfWn6lbmlb9yUEYJr3ULgF0ZiI5ZEmq_AIJncsvscoXCh0=w526-h296-rw" alt="" className='size-10 rounded-md' />
        <div >
            <p className='font-medium text-black text-lg'>Siam Hasan</p>
            <p className='text-gray-800'>@siam622</p>
        </div>

    </div>
    </td>
    <td className="px-6 py-4">
    <p className='text-lg font-medium text-secondary'>70%</p>
    </td>
    <td className="px-6 py-4">
    <p className='text-lg font-medium text-primary'>7637662</p>
    </td>
    <td className="px-6 py-4">
  <button className='text-xl text-black '>
  <HiOutlineDotsHorizontal />
  </button>
    </td>
</tr>
  )
}

export default RankingTableCard