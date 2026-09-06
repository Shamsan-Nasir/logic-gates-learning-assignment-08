import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">

                <a className="btn btn-ghost bg-clifford text-xl font-bold">Keen<span className='text-main font-medium'>Keeper</span></a>
            </div>

            <div className="navbar-end">
                <a className="btn px-3.5 py-2.5 bg-main text-white"> <CiHome></CiHome> Home</a>
                <a className="btn px-3.5 py-2.5"> <IoMdTime></IoMdTime>TimeLine</a>
                <a className="btn px-3.5 py-2.5"><TfiStatsUp></TfiStatsUp>Stats</a>
            </div>
        </div>
    )
}
