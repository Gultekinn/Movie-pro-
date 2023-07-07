import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "../Detail/Detail.scss"
const Detail = () => {
    const{id}=useParams()
    const [item,setData]=useState({})
    useEffect(async () => {
        await axios.get(`http://localhost:8080/films/${id}`).then((res) => {
          setData(res.data);
          console.log(res.data);
        });
      }, []);
      
  return (
    <>
 
    <div className="common">
        
          <div className="common__card">
            <div className="common__card__img">
              <img
                src={`http://localhost:8080/public/${item.mainimage}`}
                alt="img"
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.filmType}</p>

            <div className="div">
              <div>
                <p id="language">{item.languageType}</p>
              </div>
              <div className="old">{item.age}+</div>
            </div>
           
          </div>
     
      </div>
    </>
  )
}

export default Detail
