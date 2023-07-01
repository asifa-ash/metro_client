import React, { useState } from 'react'
import './Signup.css'
import { useDispatch } from "react-redux";
import { signup} from '../../redux/async/auth'




const Signup = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({firstname:"",lastname:"", username: "", password: "",number:"" });
  const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})

  }
  const  handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch(signup({...data}))
  }

  return (
    <div className='signup'>
      <form action="" onSubmit={handleSubmit} className='signForm'>
      <input
            type="text"
            placeholder="First Name"
            name="firstname"
             onChange={handleChange}
             value={data.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
             onChange={handleChange}
             value={data.lastname}
          />
          <input
            type="email"
            placeholder="Email"
            name="username"
             onChange={handleChange}
             value={data.username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
             onChange={handleChange}
             value={data.password}
          />
          <input
            type="number"
            placeholder="Phone No"
            name="number"
             onChange={handleChange}
             value={data.number}
          />
          <button className="signupbtn" type="Submit">SignUp</button>
          <hr className="signhr" />
          <p>
            Already have an account?{" "}
            <a href="/login">
              <span style={{ color: "orange" }}>Login here</span>
            </a>
          </p>
      </form>
    </div>
  )
}

export default Signup