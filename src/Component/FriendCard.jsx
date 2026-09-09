import React from 'react'
import './Friendclass.css'
import { Link } from 'react-router'
export const FriendCard = ({ cardData }) => {
    const statusColor = { "on-track": 'bg-main', 'overdue': 'bg-[#EF4444]', 'almost due': 'bg-[#EFAD44]' }
    return (
        <Link to={`/Home/${cardData.id}`}>
            <div className='hovering rounded-lg bg-white shadow flex flex-col justify-center items-center p-6 gap-2 cursor-pointer h-full'>
                <div className='min-w-12 w-[85%] rounded-full flex justify-center  '><img src={cardData.picture} alt="" className='w-[60%] min-w-25 rounded-full' /></div>
                <div className='font-semibold text-xl text-center'>{cardData.name}</div>
                <div className='flex-1'>{cardData.days_since_contact} days</div>
                <div className='flex flex-1  flex-wrap justify-center gap-1 items-start'>{cardData.tags.map((tag, index) => <div key={index} className='bg-[#CBFADB] px-2.5 py-2 text-xs text-center rounded-full font-medium'>{tag}</div>)}</div>
                <div className={`${statusColor[cardData.status]} px-2 py-1 rounded-full text-white text-center`}>{cardData.status}</div>
            </div>
        </Link>
    )
}
