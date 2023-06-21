import React from "react";
import Slider from "react-slick";
import "../SlickSlider/Slide.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <div className="slide">
    
          <h1>MOVIE PRO SPECIAL</h1>
          <Slider {...settings}>
            <div className="text">
              <div className="text__img1"></div>
            <div className="texts">
              <div>              <button>View Trailer</button>
</div>
<div><button>View Details</button></div>
              
            </div>
             <h2> Avengers</h2>
             <div className="div__icon">
              <div> <p>  Drama action</p></div>
            <div id="shop"><ShoppingCartIcon/></div>

             </div>
            <p id="star"><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/></p>


            </div>

            <div className="text">
              <div className="text__img2"></div>
              <div className="texts">
              <div>              <button>View Trailer</button>
</div>
<div><button>View Details</button></div>
              
            </div>
             
              <h2> Barbie</h2>
             <div className="div__icon">
              <div> <p>Comedy</p></div>
            <div id="shop"><ShoppingCartIcon/></div>

             </div>
            <p id="star"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/></p>
            </div>

            <div className="text">
              <div className="text__img3"></div>
              <div className="texts">
              <div>              <button>View Trailer</button>
</div>
<div><button>View Details</button></div>
              
            </div>
              <h2>Secret Invasion</h2>
             <div className="div__icon">
              <div> <p>Action</p></div>
            <div id="shop"><ShoppingCartIcon/></div>

             </div>
            <p id="star"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/></p>
            </div>

            <div className="text">
              <div className="text__img4"></div>
              <div className="texts">
              <div>              <button>View Trailer</button>
</div>
<div><button>View Details</button></div>
              
            </div>
              <h2> Spider-Man</h2>
             <div className="div__icon">
              <div> <p> Action</p></div>
            <div id="shop"><ShoppingCartIcon/></div>

             </div>
            <p id="star"><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/></p>
            </div>

            <div className="text">
              <div className="text__img5"></div>
              <div className="texts">
              <div>              <button>View Trailer</button>
</div>
<div><button>View Details</button></div>
              
            </div>
              <h2>Joker</h2>
             <div className="div__icon">
              <div> <p>  Drama action</p></div>
            <div id="shop"><ShoppingCartIcon/></div>

             </div>
            <p id="star"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
            </div>

            <div className="text">
              <div className="text__img6"></div>
              <div className="texts">
              <div>              <button>View Trailer</button>
</div>
<div><button>View Details</button></div>
              
            </div>
              <h2>Atatürk</h2>
             <div className="div__icon">
              <div> <p>Drama action</p></div>
            <div id="shop"><ShoppingCartIcon/></div>

             </div>
            <p id="star"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
            </div>
          </Slider>
        </div>
     
  );
};

export default SimpleSlider;
