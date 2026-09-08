import React from 'react'
import callIcon from '../../assets/call.png'
import textIcon from '../../assets/text.png'
import videoIcon from '../../assets/video.png'

export const HistoryCard = ({name,time,action}) => {

  return (
    <div className='bg-white p-3 flex items-center gap-3 rounded-lg border border-gray-300'>
        <div>
            <img src={callIcon} alt="Call" className='w-[75%]'/>
        </div>
        <div className='space-y-1.5'>
            <p className='text-sm text-secondaryText'> <span className='font-medium text-main'>{action}</span> with {name} </p>
            <p className='text-secondaryText font-medium'>{time}</p>
        </div>

    </div>
  )
}
