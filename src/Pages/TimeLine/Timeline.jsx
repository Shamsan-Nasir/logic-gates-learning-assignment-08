import React, { useState } from 'react'
import { HistoryCard } from './History'
import { RiArrowDropDownLine } from "react-icons/ri";

export const Timeline = () => {
  let [filterBy, setFilterBy] = useState('');
  return (
    <>
      <title>KeenKeeper-Timeline</title>
      <div className='py-16 px-10 sm:px-20 md:px-30 lg:px-49 bg-[#F8FAFC]'>

        <div className='space-y-5'>

          <h1 className='font-bold text-4xl text-center md:text-start'>Timeline</h1>

          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1 flex justify-between text-secondaryText">
                <div className='pr-6'>{filterBy ? 'Filtering by' : 'Filter by'}: {filterBy}</div>
                <div><RiArrowDropDownLine></RiArrowDropDownLine></div>
              </div>
              <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={() => setFilterBy('calls')}>Calls</a></li>
                <li><a onClick={() => setFilterBy('texts')}>Texts</a></li>
                <li><a onClick={() => setFilterBy('videos')}>Videos</a></li>
                {filterBy ? <li><a onClick={() => setFilterBy('')}>None</a></li>:<></>}
              </ul>
            </div>
          </div>

          <div>
            {
              <HistoryCard></HistoryCard>
            }
          </div>
        </div>

      </div>
    </>
  )
}
