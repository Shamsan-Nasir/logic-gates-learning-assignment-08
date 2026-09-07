import React from 'react'
import { FriendCard } from './FriendCard'

export const HomeCardContainer = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-6'>
                <div className='rounded-lg flex items-center flex-col p-4 bg-white gap-2'>
                    <div className='font-semibold text-3xl'>10</div>
                    <div className='text-secondaryText'>total friends</div>
                </div>
                <div className='rounded-lg flex items-center flex-col p-4 bg-white gap-2'>
                    <div className='font-semibold text-3xl'>3</div>
                    <div className='text-secondaryText'>On Track</div>
                </div>
                <div className='rounded-lg flex items-center flex-col p-4 bg-white gap-2'>
                    <div className='font-semibold text-3xl'>6</div>
                    <div className='text-secondaryText'>Need Attention</div>
                </div>
                <div className='rounded-lg flex items-center flex-col p-4 bg-white gap-2'>
                    <div className='font-semibold text-3xl'>12</div>
                    <div className='text-secondaryText'>Interactions This Month</div>
                </div>
 
            </div>
            <div>
                <h1>Your Friends</h1>
                <div>
                    <FriendCard></FriendCard>
                </div>
            </div>
        </div>
    )
}
