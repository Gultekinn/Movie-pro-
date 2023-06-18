import React from 'react'
import Movie from '../Movie/Movie'
import '../Home/Home.scss'
import SimpleSlider from '../../../component/Site/SlickSlider/SimpleSlider'
import Hero1 from '../../../component/Site/Hero1/Hero1'
import Slide from '../../../component/Site/Slide/Slide'
import Hero2 from '../../../component/Site/Hero2/Hero2'

const Home = () => { 
   
      
  return (
    <div>
       
      <Movie/>

     
      <SimpleSlider/> 
    
<Hero1/>
 <Slide/> 
 <Hero2/>
    </div>
  )
}

export default Home
