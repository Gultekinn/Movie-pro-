import React, { useEffect, useState } from "react";
import "../Home/Home.scss";
import SimpleSlider from "../../../component/Site/SlickSlider/SimpleSlider";
import  Card from "../../../component/Site/Card/Card";
import Slide from "../../../component/Site/Slide/Slide";
import Hero2 from "../../../component/Site/Hero2/Hero2";
import "../Home/Home.scss";
import Loading from "../../../component/Loading/Loading";
import { Helmet } from "react-helmet";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const videoSource="SP"
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>

<Helmet>
                <title>Home</title>
            </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="parallax">
            {/* <video autoPlay="autoPlay" logo="logo">
<source src={videoSource} type="video/mp4"/>
            </video> */}
            <div className="parallax__wrapper">
              <SimpleSlider />
            </div>
          </div>

          <Card/>
          <Slide />

                      <Hero2 />

        </div>
      )}
    </>
  );
};

export default Home;
