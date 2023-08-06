import React, { useEffect, useState } from 'react'
import './nav.css'
import { useDispatch, useSelector } from 'react-redux'
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { logout } from '../../redux/async/auth'
import { Link, useNavigate } from 'react-router-dom'
import { count } from '../../redux/async/cart';



const Nav = () => {
  const user=useSelector((state)=>state.authReducer.user)
  const cartCount = useSelector((state) => state. cartsReducer.carts);
  console.log(cartCount,"no");
  const dispatch = useDispatch();
  const [counts, setCounts] = useState("")
  const nav=useNavigate()
  useEffect(() => {
  dispatch(count())
  }, [])
  const handleLogout=()=>{
    console.log(user,"inNav");
    dispatch(logout())
    if(!user){

      nav("/login")
    }


  }
  return (
    <div className="Anounce">
      <div className="wrap">
        <div className="title">
          <h1 className="active">
            Plastic Bags
            <div className="submenu">
              <ul>
                <li>HM Plastic Bags</li>
                <li>LD Plastic Bags</li>
                <li>PP Plastic Bags</li>
                <li>PP Plastic Bags</li>
                <li>PP Plastic Bags</li>
                <li>PP Plastic Bags</li>
              </ul>
            </div>
          </h1>

          <h1 className="active">
            Paper Bags
            <div className="submenu">
              <ul>
                <li>asifa</li>
                <li>asifa</li>
                <li>asifa</li>
              </ul>
            </div>
          </h1>
          <h1 className="active">
            Carry Bags
            <div className="submenu">
              <ul>
                <li>asifa</li>
                <li>asifa</li>
                <li>asifa</li>
              </ul>
            </div>
          </h1>
          <h1 className="active">
            Non woven Bags
            <div className="submenu">
              <ul>
                <li>asifa</li>
                <li>asifa</li>
                <li>asifa</li>
              </ul>
            </div>
          </h1>
        </div>

        <div className="icon">M-Packs</div>

        <div className="account">
          <hr className="hr" />

          <SearchIcon />

          <hr className="hr" />

          <PermIdentityIcon />
          <button className='logOutBtn' onClick={handleLogout}>Log Out</button>

          <FavoriteBorderIcon />

          <Badge badgeContent={1} color="primary">
            <AddShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Nav