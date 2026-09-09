import React, { use, useContext, useEffect } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { TimeLineContext } from '../../Context';
import { toast } from 'react-toastify';





export const FriendDetails = () => {
  let idx = Number((useParams()).id);
  let allData;

  const { pathname } = useLocation();
  const statusColor = { "on-track": 'bg-main', 'overdue': 'bg-[#EF4444]', 'almost due': 'bg-[#EFAD44]' }

  allData = useLoaderData()
  let requiredData = allData.find(friend => friend.id === idx)

  let date = new Date(requiredData.next_due_date)
  let formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let today = new Date()

  let dateTime = today.toLocaleDateString('en-us', {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  let { timelineCart, setTimelineCart } = useContext(TimeLineContext)


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);



  return (
    <div className='bg-[#F8FAFC] px-10 sm:px-20 md:px-30 lg:px-49 py-16 flex-col md:flex-row flex gap-5 justify-center'>

      <div className='flex flex-col sm:flex-row gap-3 md:flex-col  '>

        <div className='bg-white flex flex-col items-center justify-center border border-[#E9E9E9]  py-5 gap-3 rounded-lg flex-1'>
          <div className='flex justify-center items-center'><img src={requiredData.picture} alt="" className='rounded-full shadow min-w-16 w-[50%]' /></div>
          <div className='font-semibold text-xl text-center'>{requiredData.name}</div>
          <div className='flex justify-center items-center'>
            <button className={`${statusColor[requiredData.status]} text-white py-1 px-2.5 rounded-full text-sm`}>{requiredData.status}</button>
          </div>
          <div className='flex justify-center items-center'>
            {requiredData.tags.map((rel, index) => <button key={index} className='bg-[#CBFADB] py-1 px-2.5 rounded-full text-sm '>{rel}</button>)}
          </div>
          <div className='text-secondaryText text-center text-sm w-[80%]'><i>{requiredData.bio}</i></div>
          <div className='text-center text-xs'>Preferred: email</div>
        </div>

        <div className='flex  flex-row sm:flex-col gap-3'>
          <div className='border flex-1 md:flex-0 border-[#E9E9E9]  hover:bg-main hover:text-white text-sm flex justify-center items-center gap-1.5 p-2.5 text-center bg-white rounded-lg' > <RiNotificationSnoozeLine></RiNotificationSnoozeLine> Snooze 2 weeks</div>
          <div className='border flex-1 md:flex-0 border-[#E9E9E9]  hover:bg-main hover:text-white text-sm flex justify-center items-center gap-1.5 py-2.5 text-center bg-white rounded-lg' > <FiArchive></FiArchive>Archive</div>
          <div className='border flex-1 md:flex-0 border-[#E9E9E9]  hover:bg-red-600 hover:text-white text-sm flex justify-center items-center gap-1.5 py-2.5 text-center text-red-600 bg-white rounded-lg'> <RiDeleteBin6Line></RiDeleteBin6Line> Delete</div>
        </div>
      </div>

      <div className='flex flex-col gap-5 '>

        <div className='grid grid-cols-3 gap-5 '>
          <div className='flex flex-col justify-center items-center border border-[#E9E9E9] rounded-lg px-2   bg-white'>
            <div className='text-main font-semibold text-2xl text-center'>{requiredData.days_since_contact}</div>
            <div className='text-secondaryText text-center text-sm'>Days Since Contact</div>
          </div>
          <div className='flex flex-col justify-center items-center border border-[#E9E9E9] rounded-lg px-2 bg-white'>
            <div className='text-main font-semibold text-2xl text-center'>{requiredData.goal}</div>
            <div className='text-secondaryText text-center text-sm'>Goal (Days)</div>
          </div>
          <div className='flex flex-col justify-center items-center border border-[#E9E9E9] rounded-lg px-4 py-8  bg-white'>
            <div className='text-main font-semibold text-2xl text-center'>{formattedDate}</div>
            <div className='text-secondaryText text-center text-sm '>Next Due</div>
          </div>
        </div>

        <div className='col-span-3 bg-white  rounded-lg p-5 space-y-3.5 border border-[#E9E9E9]'>
          <div className='flex justify-between items-center '>
            <h1 className='text-main font-medium text-lg'>Relationship Goal</h1>
            <button className='text-main btn px-4 py-2'>Edit</button>
          </div>
          <div className='text-secondaryText'>Connect Every <span className='font-bold'>30 Days</span></div>
        </div>

        <div className='col-span-3 bg-white px-5 py-6 rounded-lg flex flex-col justify-center gap-3.5 flex-1 border border-[#E9E9E9]'>

          <h1 className='text-main font-medium text-lg'>Quick Check-In</h1>

          <div className='grid grid-cols-3 gap-5 border border-[#E9E9E9]'>
            <button onClick={() => {
              setTimelineCart([...timelineCart, { 'name': requiredData.name, "time": dateTime, 'action': 'call' }])
              toast.success(`Calling ${requiredData.name}`)
            }} className='bg-[#F8FAFC] text-secondaryText border border-[#E9E9E9] flex flex-col justify-center cursor-pointer hover:bg-main hover:text-white items-center rounded-lg px-2   '>
              <div className=' font-semibold text-2xl text-center'><IoCallOutline></IoCallOutline></div>
              <div className=' text-center text-sm'>Call</div>
            </button>
            
            <button onClick={() => {
              setTimelineCart([...timelineCart, { 'name': requiredData.name, "time": dateTime, 'action': 'text' }])
              toast.success(`Messaging ${requiredData.name}`)
            }} className='bg-[#F8FAFC] text-secondaryText border border-[#E9E9E9] flex flex-col justify-center cursor-pointer hover:bg-main hover:text-white items-center rounded-lg px-2 '>
              <div className=' font-semibold text-2xl text-center'><MdOutlineMessage></MdOutlineMessage></div>
              <div className=' text-center text-sm'>Text</div>
            </button>

            <button onClick={() => {
              setTimelineCart([...timelineCart, { 'name': requiredData.name, "time": dateTime, 'action': 'video' }])
              toast.success(`Video Calling ${requiredData.name}`)
            }} className='bg-[#F8FAFC] text-secondaryText border border-[#E9E9E9] flex flex-col justify-center cursor-pointer hover:bg-main hover:text-white items-center rounded-lg px-4 py-4  '>
              <div className=' font-semibold text-2xl text-center'><CiVideoOn></CiVideoOn></div>
              <div className=' text-center text-sm '>Video</div>
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}
