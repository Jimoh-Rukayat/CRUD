import React from "react";
import {Link} from 'react-router-dom'
import '../Styles/Home.css'
import {motion} from 'framer-motion'


const Home = ()=>{
    return(
        <div className="home-component">
            <motion.h1
            initial={{x: -1000}}
            animate={{x: 0}}
            transition={{delay:1.0, type:"spring"}}
            >WELCOME TO ACTIVATE 3.0</motion.h1>
            <motion.h3
            initial={{x: -1000}}
            animate={{x:0}}
            transition={{delay:1.0, type:"spring"}}
            >Click on the button below to continue</motion.h3>
            <Link to='/dashboard'><motion.button
            transition={{delay:0, type:"spring", stiffness:300}}
            whileHover={{scale:1.5}}>Go to Dashboard</motion.button></Link>
        </div>
    )
}


export default Home;