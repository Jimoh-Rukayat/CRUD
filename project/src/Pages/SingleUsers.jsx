import React, { useState, useEffect } from 'react'
import '../Styles/SingleUser.css'
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import image from '../assets/image-emily.jpg'



const SingleUsers = ()=>{
    let {id} = useParams()
    const [students, setStudents] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        phoneNumber: " ",
        gender: " ",
        branch: " ",
        occupation: " "
    })
    useEffect(()=>{
        loadStudents()
    }, [])

    const {firstName, lastName, email, phoneNumber, gender, branch, occupation} = students
    const loadStudents=async ()=>{
        const res =  await axios.get(`http://localhost:3005/students/${id}`)
        setStudents(res.data)
    }
    return(
        <div className='special'>
            <div className='top'>
                <div>
                    <h1>Welcome {firstName}!</h1>
                </div>
               <div className='picture'>
                    <img src={image} alt={image} width="50kb" height='50kb'/>
                    <h3>Member</h3>
               </div>
            </div>
            <div className='profile'>
                <h2>Student Profile</h2>
                <div>
                <Link to='/'><button>Go to <HiHome/></button></Link>
                </div>
            </div>
            <div className='single-user'>
            <div className='mine'>
                <h2>Name:</h2><hr/>
                <h2>E-mail:</h2><hr/>
                <h2>Gender:</h2><hr/>
                <h2>Mobile</h2><hr/>
                <h2>Branch:</h2><hr/>
                <h2>Occupation:</h2>
            </div>
            <div className='yours'>
            <h2>{firstName} {lastName}</h2><hr style={{width: "280px"}}/>
            <h2>{email}</h2><hr style={{width: "280px"}}/>
            <h2>{gender}</h2><hr style={{width: "280px"}}/>
            <h2>{phoneNumber}</h2><hr style={{width: "280px"}}/>
            <h2>{branch}</h2><hr style={{width: "280px"}}/>
            <h2>{occupation}</h2>
            </div>
        </div>
        </div>
        
    )
}




export default SingleUsers;