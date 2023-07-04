import React, { useEffect, useState } from "react";
import "../Home/Home.scss";
import SimpleSlider from "../../../component/Site/SlickSlider/SimpleSlider";
import Hero1 from "../../../component/Site/Hero1/Hero1";
import Slide from "../../../component/Site/Slide/Slide";
import Hero2 from "../../../component/Site/Hero2/Hero2";
import "../Home/Home.scss";
import Loading from "../../../component/Loading/Loading";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

 
  <div className="carousel-inner">
    <div className="carousel-item active onee">
      <div className="divv1">

      </div>
    </div>
    <div class="carousel-item twoo">
<div className="divv1">
        
      </div>
    </div>
    <div className="carousel-item three">
    <div className="divv1">
        
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
          

          <SimpleSlider />

          <Hero1 />
          <Slide />
          <Hero2 />
        </div>
      )}
    </>
  );
};

export default Home;
