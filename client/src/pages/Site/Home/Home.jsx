import React from 'react'
import Movie from '../Movie/Movie'
import '../Home/Home.scss'
import SimpleSlider from '../../../component/Site/SlickSlider/SimpleSlider'
import Hero1 from '../../../component/Site/Hero1/Hero1'
import Slide from '../../../component/Slide/Slide'

const Home = () => { 
   
      
  return (
    <div>
       
      <Movie/>

     
      <SimpleSlider/> 
      
<Hero1/>

    </div>
  )
}

export default Home
