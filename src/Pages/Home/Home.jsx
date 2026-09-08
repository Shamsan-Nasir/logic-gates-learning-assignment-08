import React, { useEffect } from 'react'
import { HomeCardContainer } from '../../Component/HomeCardContainer'
import { useLoaderData, useLocation } from 'react-router'

export const Home = () => {
    let allData = useLoaderData();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <>
            <title>KeenKeeper-Home</title>
            <section className='py-16 px-10 sm:px-20 md:px-30 lg:px-49 bg-[#F8FAFC]'>
                <div className='flex flex-col items-center justify-center mb-8'>
                    <h1 className='text-[#1F2937] text-center font-bold text-[38px]'>Friends to keep close in your life</h1>
                    <p className='text-[#64748B] py-3 text-center w-[55%] text-sm '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='mt-3'> <button className='btn bg-main text-white py-4'>+ Add a Friend</button> </div>
                </div>
                <HomeCardContainer friends={allData}></HomeCardContainer>

            </section>
        </>
    )
}
