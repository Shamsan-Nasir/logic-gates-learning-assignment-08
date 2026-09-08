import React from 'react'
import logoLg from '../assets/logo-xl.png'
import face from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
export const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-main text-white flex flex-col justify-around items-center p-10 px-10 sm:px-20 md:px-30 lg:px-49">
            <div>
                <img src={logoLg} alt="" />
                <p className='text-[#FAFAFA]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <nav className='mt-0'>
                <p className='font-medium text-lg mb-3'>Social Links</p>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <img src={insta} alt="instagram logo" />
                    </a>
                    <a>
                        <img src={face} alt="facebook logo" />
                    </a>
                    <a>
                        <img src={twitter} alt="twitter logo" />
                    </a>

                </div>
            </nav>
            <div className='flex flex-col md:flex-row-reverse justify-around items-center w-full gap-5 '>
  
                <div className='flex justify-center md:justify-end text-[#FAFAFA]  w-[90%] md:w-1/2 gap-4'>
                    <div className='px-0'> Privacy Policy  </div>
                    <div className='px-0'> Terms of Service </div>
                    <div className='px-0 '> Cookies </div>
                </div>
                <div className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</div>
            </div>
        </footer>
    )
}
