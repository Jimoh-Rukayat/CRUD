import React, { useEffect, useState } from "react";
import '../Styles/EditUsers.css'
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";






const EditUsers= ()=>{
    let {id} = useParams()
    let navigate = useNavigate()
    const [students, setStudents] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        gender: " ",
        branch: " "
    })


    const {firstName, lastName, email, gender, branch} = students
    const handleInput = (e)=>{
        setStudents({...students, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        loadStudents()
    }, [])
    const loadStudents = async()=>{
        const response = await axios.get(`http://localhost:3005/students/${id}`)
          setStudents(response.data)
       }
     const handleSubmit = async(e) =>{
        e.preventDefault()
       await axios.put(`http://localhost:3005/students/${id}`, students)
        navigate ("/dashboard")
     }
     

    return(
         <div className="edit-users">
            <div className="edit-student">
                <h1>Edit Student Profile</h1>
                <Link to='/dashboard'><RxDashboard/> Dashboard</Link> 
            </div>
            <form  onSubmit={handleSubmit}>
                <input type="text"  name="firstName" value={firstName} onChange={handleInput}></input>
                <input type="text" name="lastName" value={lastName} onChange={handleInput}></input>
                <input type="email" name="email" value={email} onChange={handleInput}></input>
                <select name="gender"  value={gender} onChange={handleInput}>
                    <option value="Female" >Female</option>
                    <option value="Male">Male</option>
                </select>
                <input type="text" placeholder="Branch name" name="branch" value={branch} onChange={handleInput}></input>
                <button type="submit">Submit</button>
            </form> 
        </div>
    )
}


export default EditUsers;