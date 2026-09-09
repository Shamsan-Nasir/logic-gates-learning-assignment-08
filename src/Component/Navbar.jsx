import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { handleButtonToggle } from '../Utilities/utilities';
import logoImg from '../assets/logo.png'
import { Link, NavLink } from 'react-router';



export const Navbar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm px-16">
            <div className="navbar-start">

                <div className="text-xl font-bold"><img src={logoImg} alt="" /></div>
            </div>

            <div className="navbar-end">
                <NavLink to={'/Home'}>{
                    ({ isActive }) => (<button className={`btn px-3.5 py-2.5 border-none ${isActive ? "bg-main text-white" : "bg-white text-black"}`}> <CiHome></CiHome><span className='hidden sm:inline-block' >Home</span> </button>)
                }
                </NavLink>
                <NavLink to={'/timeline'}>{
                    ({ isActive }) => (<button className={`btn px-3.5 py-2.5 border-none ${isActive ? "bg-main text-white" : "bg-white text-black"}`}> <IoMdTime></IoMdTime><span className='hidden sm:inline-block' >TimeLine</span></button>
                    )}</NavLink>
                <NavLink to={'/stats'}>{
                    ({ isActive }) => (<button   className={`btn px-3.5 py-2.5 border-none ${isActive ? "bg-main text-white" : "bg-white text-black"}`}><TfiStatsUp></TfiStatsUp><span className='hidden sm:inline-block' >Stats</span></button>
                    )}</NavLink>
            </div>
        </div>
    )
}
