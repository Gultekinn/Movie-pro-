import React, { useEffect, useState } from "react";
import "./Card.scss";
import axios from "axios";
const Card = () => {
  const [data,setData]=useState()
  useEffect(()=>{
    axios.get("http://localhost:8080/films").then((res)=>{
      setData(res.data)
    })
  })
  return (
    <>
      <div className="common">
        {
          data && data.map((item,index)=>{
            return(
                  <div key={index} className="common__card">
          <div className="common__card__img">
          <img src={`http://localhost:8080/public/${item.mainimage}`} alt="img" />
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
          <button id="ticket">buy a ticket</button>
        </div>    
            )
          })
        }


      
      </div>
    </>
  );
};

export default Card;
