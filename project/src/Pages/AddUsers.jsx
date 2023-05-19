import axios from "axios";
import React, { useState } from "react";
import '../Styles/AddUsers.css'
import { useNavigate, Link } from "react-router-dom";
import Popup from 'reactjs-popup'




const AddUsers = ()=>{ 
    let navigate = useNavigate()
    const [students, setStudents] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        phoneNumber:" ",
        gender: " ",
        branch: " ",
        occupation: " ",
    })
    const [error, setError] = useState(false)
    const {firstName, lastName, email, phoneNumber, gender, branch, occupation} = students

    const handleInput = (e)=>{
        setStudents({...students, [e.target.name]: e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(firstName.trim().length===0 || lastName.trim().length===0 || email.trim().length===0 || gender.trim().length===0 || branch.trim()===0 || occupation.trim().length===0) {
            setError(true)
        }else{
            setError(false)
            await axios.post("http://localhost:3005/students", students)
            navigate ("/dashboard")
 
        }
    }
    return(
        <div className="parent">
            <div className="add-users">
                <div className='add-top'>
                    <h1>New Student</h1>
                </div>
                <div className='add-info'>
                    <h3>Student Information:</h3>
                    <Link to='/dashboard'><button>Go to Dashboard</button></Link>
                </div>
            </div>
            <div className="form">
            <form onSubmit={handleSubmit}>
               <p>First name *</p>
                <input type="text"  name="firstName" value={firstName} onChange={handleInput}></input>
                {error && firstName.trim().length===0 ?
                <label>* field is required</label>
                :
                " "
             } 
                 <p>Last name *</p>
                <input type="text" name="lastName" value={lastName} onChange={handleInput}></input>
                {error && lastName.trim().length===0 ?
                <label>* field is required</label>
                :
                " "
             }
                <input type="email" placeholder="Email"  name="email" value={email} onChange={handleInput}></input>
                {error && email.trim().length===0 ?
                <label>* field is required</label>
                :
                " "
             } 
              <p>Mobile Number *</p>
             <input type="number"  name="phoneNumber" value={phoneNumber} onChange={handleInput}></input>
                {error && phoneNumber.trim().length===0 ?
                <label>* field is required</label>
                :
                " "
            }
            </form>
            <form onSubmit={handleSubmit}>
               <p>Gender *</p>
               <select name="gender" value={gender} onChange={handleInput}>
                <option value=' '>  </option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
               </select>
               {error && gender.trim().length===0 ?
               <label>* field is required</label>
               :
               " "
               }

                <p>Branch *</p>
                <input type="text" name="branch" value={branch} onChange={handleInput}></input>
                {error && branch.trim().length===0 ?
                <label>* field is required</label>
                :
                " "
             }
             <p>Occupation *</p>
             <input type="text" name="occupation" value={occupation} onChange={handleInput}></input>
             {error && occupation.trim().length===0 ?
                <label>* field is required</label>
                :
                " "
             }
              <div>
               <button type="submit">Submit</button>
             </div>
            </form>
           
          </div>
        </div>

    )
}

export default AddUsers;