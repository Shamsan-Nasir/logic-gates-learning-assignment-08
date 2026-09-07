import React from 'react'

export const FriendCard = ({ cardData }) => {
    const statusColor = {"on-track": 'bg-main', 'overdue': 'bg-[#EF4444]', 'almost due': 'bg-[#EFAD44]'}
    return (
        <div className='rounded-lg bg-white shadow flex flex-col justify-center items-center p-5 gap-2'>
            <div className='min-w-12 w-[85%] rounded-full flex justify-center  '><img src={cardData.picture} alt="" className='w-[60%] min-w-25 rounded-full' /></div>
            <div className='font-semibold text-xl text-center'>{cardData.name}</div>
            <div className='flex-1'>{cardData.days_since_contact} days</div>
            <div className='flex flex-wrap justify-center gap-2 items-center'>{cardData.tags.map(tag => <div className='bg-[#CBFADB] px-3 py-2.5 text-sm rounded-full font-medium'>{tag}</div>)}</div>
            <div className={`${statusColor[cardData.status]} px-3 py-2 rounded-full text-white text-center`}>{cardData.status}</div>
        </div>
    )
}
