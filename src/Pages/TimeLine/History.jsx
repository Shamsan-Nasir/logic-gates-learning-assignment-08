import React from 'react'
import callIcon from '../../assets/call.png'
import textIcon from '../../assets/text.png'
import videoIcon from '../../assets/video.png'


const iconList = { "call": callIcon, 'text': textIcon, 'video': videoIcon }
export const HistoryCard = ({ name, time, action }) => {
  let dateFormat = time.toLocaleDateString('en-us', {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
  let timeFormat = time.toLocaleTimeString('en-us')
  return (
    <div className='bg-white p-3 flex items-center justify-between gap-3 rounded-lg border border-gray-300'>
      <div className='flex items-center gap-3'>
        <div>
          <img src={iconList[action]} alt="Call" className='w-[75%]' />
        </div>
        <div className='space-y-1.5'>
          <p className='text-sm text-secondaryText'> <span className='font-medium text-main'>{action[0].toUpperCase()+action.slice(1)}</span> with {name} </p>
          <p className='text-secondaryText font-medium'>{dateFormat}</p>
        </div>
      </div>
      <div className='flex items-center text-secondaryText font-medium'>
        {timeFormat}
      </div>

    </div>
  )
}
