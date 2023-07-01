import React from 'react'
import './nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/async/auth'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  const user=useSelector((state)=>state.authReducer.user)
  const dispatch = useDispatch();
  const nav=useNavigate()
  const handleLogout=()=>{
    console.log(user,"inNav");
    dispatch(logout())
    if(!user){

      nav("/login")
    }


  }
  return (
    <div className='nav'>
      <button onClick={handleLogout}>logout</button>
      <Link to={"/product"}><button>pro</button></Link>
     
    </div>
  )
}

export default Nav