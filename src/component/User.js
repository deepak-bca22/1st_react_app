import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import { Link } from 'react-router-dom'
import axios from 'axios';


const User = () => {

const [e_data,setE_data]=useState([]);

useEffect(()=>{
  const employee_data=async()=>{
    axios.get('http://localhost:8000/employee-details')
    .then(res=>setE_data(res.data))
    .catch(err=>console.log(err)
    );
  }
  employee_data();
},[])

  return (
   <React.Fragment>

<div className='leftside'>
      <Header/>
      </div>

<div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          
       <h3 className='mt-2' >Employees</h3>
       <div className='d-grid d-md-flex justify-content-md-end mb-3'>

      <Link to={"../user-register"} className='btn btn-primary'>Add New Employee</Link>
      </div>

      <table className='table table-bordered'>
      
      <thead>
        <tr>
            <th>Sr.No</th>
            <th>Employee</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Sallary</th>
            <th>Action</th>

            
        </tr>
      </thead>
      <tbody>{
        e_data.map((data,index)=>{
         return(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{data.name}</td>
          <td>{data.address}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.sallary}</td>
         <td> <Link to={"/userDelete"} className='btn btn-danger'>Delete</Link> </td>
        </tr>
         )

        })
       

        }
    
      
      </tbody>

      </table>


    

        </div>
      </div>
     </div>
   </React.Fragment>
  )
}

export default User