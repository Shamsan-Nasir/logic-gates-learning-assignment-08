import React from 'react'

export const FriendCard = ({cardData}) => {
  return (
    <div className='rounded-lg'>
        <div className='w-1/2 rounded-full'><img src="https://i.pravatar.cc/150?img=47" alt="" className='w-1/2 rounded-full'/></div>
        <div>David Kim</div>
        <div>62d ago</div>
        <div>work</div>
        <div>Almost due</div>
    </div>
  )
}
