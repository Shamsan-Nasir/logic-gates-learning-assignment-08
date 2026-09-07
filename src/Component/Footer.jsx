import React from 'react'
import logoLg from '../assets/logo-xl.png'
import face from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
export const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-main text-white flex flex-col justify-around items-center p-10 px-49">
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
            <div className='flex justify-between w-full '>
                <div className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</div>
                <div className='flex justify-between text-[#FAFAFA]'>
                    <div className='px-4'> Privacy Policy  </div>
                    <div className='px-4'> Terms of Service </div>
                    <div className='pl-4'> Cookies </div>
                </div>
            </div>
        </footer>
    )
}
