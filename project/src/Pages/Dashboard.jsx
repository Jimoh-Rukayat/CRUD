import React, { useEffect, useState } from "react"; 
import '../Styles/Dashboard.css'
import axios from 'axios'
import {MdDelete} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {AiFillEye} from 'react-icons/ai'
import { Link, useParams } from "react-router-dom";





const Dashboard = ()=>{
    const [students, setStudents] = useState([])

    useEffect(()=>{
        loadStudents()
    }, [])

    const loadStudents = async()=>{
        const output = await axios.get("http://localhost:3005/students")
        setStudents(output.data)
    } 
    const deleteStudents = async(id)=>{
       await axios.delete(`http://localhost:3005/students/${id}`)
        loadStudents()
    }
   
    const result= students.map((student)=>{
        return(
            <div>
                <tr className="table-body" key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.gender}</td>
                    <Link to={`/single/${student.id}`}><td className="single"><AiFillEye/></td></Link>
                    <Link to={`/edit/${student.id}`}><td className="edit"><FiEdit/></td></Link>
                    <td className="delete" onClick={()=>deleteStudents(student.id)}><MdDelete/></td>
                </tr>
            </div>
        )
    })
   
    return(
       
        <div className='dashboard'>
            <div className="first-top">
               <h2>Welcome {students.firstName}</h2> 
            </div>
            <div className="second-top">
                <p>Total No. of Students: {students.length}</p>
            </div>
            <table>
                <thead>
                  <tr className='table-head'>
                    <th>S/N</th>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </div>
    )
}


export default Dashboard;