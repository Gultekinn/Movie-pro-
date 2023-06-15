
import React  from "react";
import Slider from "react-slick";
import '../SlickSlider/Slide.scss'
const SimpleSlider = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    };
    return (
      <div className="slide">
      
        <div className="slides">
          <div className="sliderss">
        <h1>Popular movie</h1>
        <Slider {...settings}>

          <div className="text">
            <div className="text__img1">
           
            </div>
     </div>

          <div className="text">
            <div className="text__img2">

            </div>
          </div>

          <div className="text">
           <div className="text__img3">

           </div>
          </div>

          <div className="text">
           <div className="text__img4">

           </div>
          </div>

          <div className="text">
        <div className="text__img5">

        </div>
          </div>

          <div className="text">
        <div className="text__img6">

        </div>
          
</div>
         
        </Slider>
      </div>
  </div>
  </div>
    );
  }



export default SimpleSlider
