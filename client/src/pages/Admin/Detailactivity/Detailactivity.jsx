import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
const Detailactivity = () => {
  const {id}=useParams()
  const [item,setData]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/cinemas/${id}`).then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
   },[])
  return (
    <>
      <div  className="cardo">

  
<div className="cardo__img">
  <img src={`http://localhost:8080/public/${item.image}`}  alt="" />
</div>
<div className="cardo__title">
  <h3>{item.title}</h3>
 
</div>
</div>

    </>
  )
}

export default Detailactivity
