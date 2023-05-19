import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard'
import AddUsers from './AddUsers'
import NavBar from "../Navbar/NavBar";
import '../Styles/Greet.css'






const Greet = ()=>{
    return(
        <div className='greet-container'> 
            <div className='nav-bar'>
            <NavBar/>
            </div>
            <div className="link">
              <Routes>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/add/user' element={<AddUsers/>}/>
             </Routes>
            </div>
            
        </div>
    )
}


export default Greet;