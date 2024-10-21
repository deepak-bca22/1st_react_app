import React, { useState } from 'react'
import Header from './common/Header'
import axios from 'axios'


const Userregister = () => {

const [values,setValues]=useState({
  name:'',
  email:'',
  phone:'',
  password:'',
  address:'',
  sallary:'',
  qualification:''

})

const handleChange =(event)=>{ 
  setValues({...values,[event.target.name]:event.target.value })
}
const handleSubmit =(event)=>{
 event.preventDefault();
  axios.post('http://localhost:8000/register',values)
  .then(res=>alert("registered successfully!"))
  .catch(err=>console.log(err))
}


  return (
    <>
    
    <div className='leftside'>
      <Header/>
    </div>

    <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
         <h3 className='mt-3 text-center'>Register new employee</h3>
            
              <form onSubmit={handleSubmit} >

              <div className='form-group'>

              <input type='text' name='name' placeholder='enter name here' className='form-control mt-3 mx-2 '  onChange={handleChange}  value={values.name}/>

              <input type='email' name='email' placeholder='enter email here' className='form-control mt-3 mx-2' onChange={handleChange} value={values.email} />

              <input type='number' name='phone' placeholder='enter phone number here' className='form-control mt-3 mx-2' onChange={handleChange} value={values.phone} />

              <input type='password' name='password' placeholder='select the password' className='form-control mt-3 mx-2' onChange={handleChange} value={values.password} />

              <input type='text' name='address' placeholder='enter full address' className='form-control mt-3 mx-2' onChange={handleChange} value={values.address} />

              <input type='number' name='sallary' placeholder='enter sallary' className='form-control mt-3 mx-2' onChange={handleChange} value={values.sallary} />


              <input type='text' name='qualification' placeholder='enter qualification' className='form-control mt-3 mx-2' onChange={handleChange}  value={values.qualification}/>

       

                {/* <div class="form-group">
                  <h5 htmlFor="job-role" className='mt-3'>Select Job Role</h5>
                  <select className="form-control" name="role" id="role">
                    <option>Select role</option>
                    <option>Software engineer</option>
                    <option>frontend developer</option>
                    <option>backend developer</option>
                    <option>fullstack developer</option>
                    <option>Machine learning</option>
                    <option>Data Science</option>
                    <option>Python Developer</option>
                    <option>App Developer</option>
                    <option>java developer</option>
                  </select>
                </div> */}
                
               
                <button className='btn btn-success btn-lg mt-4 mx-3  '>Register</button>

                </div>
              </form>

            

          </div>
        </div>
    </div>
    </>
  )
}

export default Userregister