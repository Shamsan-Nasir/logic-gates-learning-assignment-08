import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";

export const FriendDetails = () => {
  let idx = useParams();
  let allData;
  // console.log(idx.id) 

  // useEffect({
  //   fetch('/data.json')
  // },[])
  return (
    <div className='bg-[#F8FAFC] px-10 sm:px-20 md:px-30 lg:px-49 py-16 flex-col md:flex-row flex gap-5 justify-between'>
      <div className='flex flex-col gap-3  '>
        <div className='bg-white flex flex-col items-center justify-center border px-8 py-5 gap-3 rounded-lg'>
          <div className='flex justify-center items-center'><img src="https://i.pravatar.cc/150?img=68" alt="" className='rounded-full shadow w-[80%]' /></div>
          <div className='font-semibold text-xl text-center'>Maliha Karim</div>
          <div className='flex justify-center items-center'>
            <button className='bg-red-500 text-white py-1 px-2.5 rounded-full'>Overdue</button>
          </div>
          <div className='flex justify-center items-center'>
            <button className='bg-[#CBFADB] py-1 px-2.5 rounded-full '>Family</button>
          </div>
          <div className='text-secondaryText text-center text-sm'><i>"Former colleague, great mentor"</i></div>
          <div className='text-center'>Preferred: email</div>
        </div>
        <div className='flex justify-center items-center gap-1.5 py-3 text-center bg-white rounded-lg' > <RiNotificationSnoozeLine></RiNotificationSnoozeLine> Snooze 2 weeks</div>
        <div className='flex justify-center items-center gap-1.5 py-3 text-center bg-white rounded-lg' > <FiArchive></FiArchive>Archive</div>
        <div className='flex justify-center items-center gap-1.5 py-3 text-center text-red-600 bg-white rounded-lg'> <RiDeleteBin6Line></RiDeleteBin6Line> Delete</div>
      </div>

      <div className='grid grid-cols-3 gap-5 border'>
        <div className='flex flex-col justify-center items-center rounded-lg   bg-white'>
          <div className='text-main font-semibold text-2xl text-center'>62</div>
          <div className='text-secondaryText text-center text-sm'>Days Since Contact</div>
        </div>
        <div className='flex flex-col justify-center items-center rounded-lg  bg-white'>
          <div className='text-main font-semibold text-2xl text-center'>30</div>
          <div className='text-secondaryText text-center text-sm'>Goal (Days)</div>
        </div>
        <div className='flex flex-col justify-center items-center rounded-lg px-4  bg-white'>
          <div className='text-main font-semibold text-2xl text-center'>Feb 27, 2026</div>
          <div className='text-secondaryText text-center text-sm '>Next Due</div>
        </div>

        <div className='col-span-3 bg-white  rounded-lg p-5'>
          <div className='flex justify-between items-center '>
            <h1 className='text-main font-medium'>Relationship Goal</h1>
            <button className='text-main btn px-4 py-2'>Edit</button>
          </div>
          <div className='text-secondaryText'>Connect Every <span className='font-bold'>30 Days</span></div>
        </div>
        <div className='col-span-3 bg-white text-center rounded-lg'>hello is this ok</div>


      </div>
    </div>
  )
}
