import React, { useEffect } from 'react'
import './Body.css'
import Card from "../card/Card.jsx"
import { getAll } from '../../redux/async/product'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Body = () => {
  const dispatch=useDispatch()
  const products = useSelector((state) => state. productsReducer.products);

  const [data, setData] = useState([])
  useEffect(() => {
    if (products?.length > 0) {
      setData(products);
    }
    console.log(data,"productssss");
  
  }, [products])
  useEffect(() => {
    dispatch(getAll())
  
  }, [])
  return (
    <div className='body'>
    {data.map((product,index)=>{
      return  <Card item={product} ket={index}/>
    })}
   
     
  
      
    </div>
  )
}

export default Body
