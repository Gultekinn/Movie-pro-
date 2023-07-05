import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
const Detailcontact = () => {
  const {id}=useParams()
  const [item,setData]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/contacts/${id}`).then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
   },[])
  return (
    <>
      <div className='cardo'>
<div className="title">
<h4>{item.mainPhone}</h4>
<h4>{item.address}</h4>
<h4>{item.email}</h4>
</div>
      </div>
    </>
  )
}

export default Detailcontact
