import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export const FriendDetails = () => {
  let idx = useParams();
  let allData;
  // console.log(idx.id) 

  // useEffect({
  //   fetch('/data.json')
  // },[])
  return (
    <div className='bg-[#F8FAFC] px-10 sm:px-20 md:px-30 lg:px-49 py-16 flex gap-5 '>
      <div className='flex flex-col gap-5  '>
          <div className='bg-white flex flex-col items-center justify-center border px-12 py-6'>
              <div className='flex justify-center items-center'><img src="https://i.pravatar.cc/150?img=44" alt="" className='rounded-full' /></div>
              <div className='font-semibold text-xl text-center'>Maliha Karim</div>
              <div className='flex justify-center items-center'>
                <button className='bg-red-500 text-white py-2 px-2.5 rounded-full'>Overdue</button>
              </div>
              <div className='flex justify-center items-center'>
                <button className='bg-[#CBFADB] py-2 px-2.5 rounded-full '>Family</button>
              </div>
              <div className='text-secondaryText text-center'><i>"Former colleague, great mentor"</i></div>
              <div className='text-center'>Preferred: email</div>
          </div>
          <div className='bg-white' >Snooze 2 weeks</div>
          <div className='bg-white' >Archive</div>
          <div className='text-red-600 bg-white'>Delete</div>
      </div>

      <div className='grid grid-cols-3 gap-5'>
        <div className='flex flex-col justify-center items-center py-7 px-3.5 bg-white'>
          <div className='text-main font-semibold text-3xl text-center'>62</div>
          <div className='text-secondaryText text-center '>Days Since Contact</div>
        </div>
        <div className='flex flex-col justify-center items-center py-7 px-3.5 bg-white'>
          <div className='text-main font-semibold text-3xl text-center'>30</div>
          <div className='text-secondaryText text-center '>Goal (Days)</div>
        </div>
        <div className='flex flex-col justify-center items-center py-7 px-3.5 bg-white'>
          <div className='text-main font-semibold text-3xl text-center'>Feb 27, 2026</div>
          <div className='text-secondaryText text-center '>Next Due</div>
        </div>
 
        <div className='col-span-3 bg-white text-center '>hello is this ok</div>
        <div className='col-span-3 bg-white text-center'>hello is this ok</div>


      </div>
    </div>
  )
}
