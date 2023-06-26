import React, { useEffect, useState } from 'react'
import "../CampaingCard/CampCard.scss"
import axios from 'axios'
const CampaingCard = () => {
        const[data,setData]=useState([])
        useEffect(()=>{
                axios.get('http://localhost:8080/cinemas').then((res)=>{
                  setData(res.data)
                })
              })
  return (
    <div>
        
      <div className="commonCard">
        {
                data && data.map((item,index)=>{
                        return(
                                    <div className="cardd">
            
                <img src={`http://localhost:8080/public/${item.image}`} alt="img" />
                        <h2>{item.title}</h2>

        </div>       
                        )
                })
      
        }
       



      </div>
    </div>
  )
}

export default CampaingCard
