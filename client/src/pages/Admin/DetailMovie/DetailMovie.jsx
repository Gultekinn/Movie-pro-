import React, { useEffect, useState } from 'react'
import "../DetailMovie/DetailMovie.scss"
import axios from "axios"
import { useParams } from 'react-router-dom'
const DetailMovie = () => {
  const {id}=useParams()

  const [item,setData]=useState({})
 useEffect(()=>{
  axios.get(`http://localhost:8080/films/${id}`).then((res)=>{
    setData(res.data)
    console.log(res.data)
  })
 },[])
  return (
    <> 
   
      <div  className="cardo">

  
  <div className="cardo__img">
    <img src={`http://localhost:8080/public/${item.mainimage}`}  alt="" />
  </div>
  <div className="cardo__title">
    <h3>{item.title}</h3>
    <p>{item.date}</p>
    <p>{item.age}</p>
    <p>{item.time}</p>
    <p>{item.filmType}</p>
    <p>{item.languageType}</p>
    <p>{item.price}</p>
  </div>
</div>
   



    </>
  )
}

export default DetailMovie
