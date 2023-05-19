import React, { useState } from "react";
import {Link} from "react-router-dom";
import '../Styles/NavBar.css'
import {FaUserPlus, FaBars} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import {HiHome} from 'react-icons/hi'
import {TiTimes} from 'react-icons/ti'




const NavBar = ()=>{
    const [mobile, setMobile] = useState(false)
    const handleMobile = ()=>{
        setMobile(!mobile)
    }
    return(
        <div className="navigation">
            <div className="nav-top">
                <h1>Activate 3.0</h1>
            </div>
            <div className= {mobile ? "min-nav" : "left-nav"}>
             <Link to='/'><HiHome/> Home</Link>
            <Link to='/dashboard'><RxDashboard/> Dashboard</Link>
            <Link to='/add/user'> <FaUserPlus/> AddUsers</Link>
            </div>
            <div className="icons">
               {mobile ? <TiTimes className="time" onClick={handleMobile}/>
               :
                <FaBars className="bar" onClick={handleMobile}/>
            }
            </div>
        </div>
    )
}


export default NavBar;