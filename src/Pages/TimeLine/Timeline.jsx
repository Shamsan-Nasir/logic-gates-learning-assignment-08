import React, { useContext, useEffect, useState } from 'react'
import { HistoryCard } from './History'
import { RiArrowDropDownLine } from "react-icons/ri";
import { TimeLineContext } from '../../Context';
import Swal from 'sweetalert2';

export const Timeline = () => {
  let [filterBy, setFilterBy] = useState('');
  let [sortBy, setsortBy] = useState('asc');
  let [searchBy, setSearchBy] = useState('')

  let { timelineCart, setTimelineCart } = useContext(TimeLineContext)
  let filteredData = [...timelineCart]



  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('timeline'));
    if (timelineCart.length === 0 && localData) {
      setTimelineCart([...localData])
    }
  }, [timelineCart]);


  if (searchBy) {
    filteredData = filteredData.filter(entries => entries.name.toLowerCase().includes(searchBy.toLowerCase()))
  }

  if (filterBy) {
    filteredData = filteredData.filter(entries => entries.action === filterBy)
  }
  if (sortBy === 'asc') {
    filteredData = filteredData.sort((a, b) => a.time - b.time)
  } else if (sortBy === 'desc') {
    filteredData = filteredData.sort((a, b) => b.time - a.time)
  } else {
    filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name))
  }

  function clearTimeline() {

    if (timelineCart.length > 0) {
      Swal.fire(
        {
          title: "Are you sure?",
          text: "Your Timeline will be deleted permanently.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it",
          cancelButtonText: "Cancel"
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem('timeline')
            setTimelineCart([])
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
    }
  }

  return (
    <>
      <title>KeenKeeper-Timeline</title>
      <div className='py-16 px-5 sm:px-15 md:px-30 lg:px-49 bg-[#F8FAFC]'>

        <div className='space-y-5'>

          <div className='flex items-center justify-between'>
            <h1 className='font-bold text-4xl text-center md:text-start'>Timeline</h1>
            <button onClick={clearTimeline} className='btn text-red-600 hover:bg-red-600 hover:text-white '>Clear history</button>
          </div>

          <div className='flex flex-col justify-between items-center gap-2'>
            <div className='w-full md:hidden '>
              <input onChange={(event) => setSearchBy(event.target.value)} type="text" name="search" id="searchBox" className={` border p-1.5 w-full ${timelineCart.length > 0 ? 'block' : 'hidden'}`} placeholder='Search Friend Name' />
            </div>

            <div className='flex md:grid md:grid-cols-3 items-center justify-between w-full'>

              <div className={timelineCart.length > 0 ? 'block' : 'hidden'}>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1 flex justify-between text-secondaryText ">
                    <div className='pr-0 sm:pr-0'>{filterBy ? 'Filtering by' : 'Filter by'}: {filterBy}</div>
                    <div><RiArrowDropDownLine></RiArrowDropDownLine></div>
                  </div>
                  <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => setFilterBy('call')}>Calls</a></li>
                    <li><a onClick={() => setFilterBy('text')}>Texts</a></li>
                    <li><a onClick={() => setFilterBy('video')}>Videos</a></li>
                    {filterBy ? <li><a onClick={() => setFilterBy('')}>None</a></li> : <></>}
                  </ul>
                </div>
              </div>

              <div className={`hidden md:block `}>
                <input onChange={(event) => setSearchBy(event.target.value)} type="text" name="search" id="searchBox" className={`border p-1.5 ${timelineCart.length > 0 ? "block" : 'hidden'} `} placeholder='Search Friend Name' />
              </div>

              <div className={`${timelineCart.length > 0 ? 'block' : 'hidden'} flex items-center justify-end`}>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1 flex justify-between text-secondaryText">
                    <div className='pr-2 sm:pr-8'>{'Sorting by'}: {sortBy}</div>
                    <div><RiArrowDropDownLine></RiArrowDropDownLine></div>
                  </div>
                  <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => setsortBy('asc')}>Earliest first</a></li>
                    <li><a onClick={() => setsortBy('desc')}>Latest First</a></li>
                    <li><a onClick={() => setsortBy('name')}>Friend Name</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div>
            {
              timelineCart.length > 0 ?
                filteredData.map((entry, index) => <HistoryCard key={index} name={entry.name} time={entry.time} action={entry.action}></HistoryCard>)
                : <div className='flex justify-center items-center w-full p-5 bg-gray-300 rounded-2xl'><div>Your history is empty</div></div>
            }
          </div>
        </div>

      </div>
    </>
  )
}

