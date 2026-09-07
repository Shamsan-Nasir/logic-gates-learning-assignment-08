import React from 'react'
import { HomeCardContainer } from '../../Component/HomeCardContainer'

export const Home = () => {
    return (
        <section className='py-16 px-49 bg-[#F8FAFC]'>
            <div className='flex flex-col items-center justify-center mb-8'>
                <h1 className='text-[#1F2937] text-center font-bold text-[38px]'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] py-3 text-center w-[55%] text-sm '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='mt-3'> <button className='btn bg-main text-white py-4'>+ Add a Friend</button> </div>
            </div>
            <HomeCardContainer></HomeCardContainer>

        </section>
    )
}
