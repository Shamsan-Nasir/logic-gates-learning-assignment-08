import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { handleButtonToggle } from '../Utilities/utilities';
import logoImg from '../assets/logo.png'
import { Link } from 'react-router';



export const Navbar = () => {
    let [isActive, setIsActive] = useState([true, false, false])
    return (
        <div className="navbar bg-base-100 shadow-sm px-16">
            <div className="navbar-start">

                <div className="text-xl font-bold"><img src={logoImg} alt="" /></div>
            </div>

            <div className="navbar-end">
                <Link to={'/'}><button onClick={() => setIsActive(handleButtonToggle(0))} className={`btn px-3.5 py-2.5 border-none ${isActive[0] ? "bg-main text-white" : "bg-white text-black"}`}> <CiHome></CiHome> Home</button></Link>
                <Link to={'/timeline'}><button onClick={() => setIsActive(handleButtonToggle(1))} className={`btn px-3.5 py-2.5 border-none ${isActive[1] ? "bg-main text-white" : "bg-white text-black"}`}> <IoMdTime></IoMdTime>TimeLine</button></Link>
                <Link to={'/stats'}><button onClick={() => setIsActive(handleButtonToggle(2))} className={`btn px-3.5 py-2.5 border-none ${isActive[2] ? "bg-main text-white" : "bg-white text-black"}`}><TfiStatsUp></TfiStatsUp>Stats</button></Link>
            </div>
        </div>
    )
}
