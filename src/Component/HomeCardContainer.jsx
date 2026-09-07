import React from 'react'
import { FriendCard } from './FriendCard'

export const HomeCardContainer = ({friends}) => {
    let friendData = friends
    return (
        <div className='flex flex-col justify-center gap-16'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6'>
                <div className='rounded-lg flex items-center flex-col p-7 bg-white gap-2 shadow '>
                    <div className='font-semibold text-3xl'>10</div>
                    <div className='text-secondaryText text-center'>total friends</div>
                </div>
                <div className='rounded-lg flex items-center flex-col p-7 bg-white gap-2 shadow '>
                    <div className='font-semibold text-3xl'>3</div>
                    <div className='text-secondaryText text-center'>On Track</div>
                </div>
                <div className='rounded-lg flex items-center flex-col p-7 bg-white gap-2 shadow '>
                    <div className='font-semibold text-3xl'>6</div>
                    <div className='text-secondaryText text-center'>Need Attention</div>
                </div>
                <div className='rounded-lg flex items-center flex-col p-7 bg-white gap-2 shadow '>
                    <div className='font-semibold text-3xl'>12</div>
                    <div className='text-secondaryText text-center'>Interactions This Month</div>
                </div>
            </div>
            
            <div>
                <h1 className='font-semibold text-xl'>Your Friends</h1>
                <br />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        friendData.map(friend => <FriendCard key={friend.id} cardData={friend}></FriendCard> )
                    }
                    
                </div>
            </div>
        </div>
    )
}
