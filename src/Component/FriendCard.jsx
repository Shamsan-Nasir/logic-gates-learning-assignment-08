import React from 'react'
import './Friendclass.css'
import { Link } from 'react-router'
export const FriendCard = ({ cardData }) => {
    const statusColor = { "on-track": 'bg-main', 'overdue': 'bg-[#EF4444]', 'almost due': 'bg-[#EFAD44]' }
    return (
        <Link to={`/${cardData.id}`}>
            <div className='hovering rounded-lg bg-white shadow flex flex-col justify-center items-center p-6 gap-2 hover:block cursor-pointer'>
                <div className='min-w-12 w-[85%] rounded-full flex justify-center  '><img src={cardData.picture} alt="" className='w-[60%] min-w-25 rounded-full' /></div>
                <div className='font-semibold text-xl text-center'>{cardData.name}</div>
                <div className='flex-1'>{cardData.days_since_contact} days</div>
                <div className='flex flex-wrap justify-center gap-2 items-center'>{cardData.tags.map((tag, index) => <div key={index} className='bg-[#CBFADB] px-3 py-2.5 text-xs rounded-full font-medium'>{tag.toUpperCase()}</div>)}</div>
                <div className={`${statusColor[cardData.status]} px-3 py-2 rounded-full text-white text-center`}>{cardData.status}</div>
            </div>
        </Link>
    )
}
