import React, { useContext, useState } from 'react'
import { HistoryCard } from './History'
import { RiArrowDropDownLine } from "react-icons/ri";
import { TimeLineContext } from '../../App';

export const Timeline = () => {
  let [filterBy, setFilterBy] = useState('');
  let {timelineCart, setTimelineCart} = useContext(TimeLineContext)
  let filteredData;
  if (filterBy){
    filteredData = timelineCart.filter(entries => entries.action === filterBy)
  } else {
    filteredData = timelineCart;
  }
 
  return (
    <>
      <title>KeenKeeper-Timeline</title>
      <div className='py-16 px-10 sm:px-20 md:px-30 lg:px-49 bg-[#F8FAFC]'>

        <div className='space-y-5'>

          <h1 className='font-bold text-4xl text-center md:text-start'>Timeline</h1>

          <div className={timelineCart.length > 0 ? 'block': 'hidden'}>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1 flex justify-between text-secondaryText">
                <div className='pr-8'>{filterBy ? 'Filtering by' : 'Filter by'}: {filterBy}</div>
                <div><RiArrowDropDownLine></RiArrowDropDownLine></div>
              </div>
              <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={() => setFilterBy('call')}>Calls</a></li>
                <li><a onClick={() => setFilterBy('text')}>Texts</a></li>
                <li><a onClick={() => setFilterBy('video')}>Videos</a></li>
                {filterBy ? <li><a onClick={() => setFilterBy('')}>None</a></li>:<></>}
              </ul>
            </div>
          </div>

          <div>
            {
            timelineCart.length > 0 ?
             filteredData.map((entry,index) => <HistoryCard key={index} name={entry.name} time={entry.time} action={entry.action}></HistoryCard>) 
             : <div className='flex justify-center items-center w-full p-5 bg-gray-300 rounded-2xl'><div>Your history is empty</div></div>
            }
          </div>
        </div>

      </div>
    </>
  )
}
