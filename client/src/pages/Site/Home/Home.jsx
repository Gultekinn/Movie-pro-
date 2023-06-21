import React, { useEffect, useState } from "react";
import "../Home/Home.scss";
import SimpleSlider from "../../../component/Site/SlickSlider/SimpleSlider";
import Hero1 from "../../../component/Site/Hero1/Hero1";
import Slide from "../../../component/Site/Slide/Slide";
import Hero2 from "../../../component/Site/Hero2/Hero2";
import "../Home/Home.scss";
import ViP from "../VIP/ViP";
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
          <div className="hero1">
            <div className="hero11">
              <div className="form">
                <select
                  class="header_class_label"
                  name="form_name1"
                  id="select"
                >
                  <option id="opti" value="">
                    Movies
                  </option>
                  <option id="opti" value="">
                    Spider-Man
                  </option>
                  <option id="opti" value="">
                    Barbie
                  </option>
                  <option id="opti" value="">
                    Secret İnvasion
                  </option>
                  <option id="opti" value="">
                    Atatürk
                  </option>
                  <option id="opti" value="">
                    Bugimen
                  </option>
                </select>{" "}
                <br />
                <select
                  class="header_class_label"
                  name="form_name1"
                  id="select"
                >
                  <option id="opti" value="">
                    Cinemas
                  </option>
                  <option id="opti" value="">
                    Park Bulvar
                  </option>
                  <option id="opti" value="">
                    Metro Park
                  </option>
                  <option id="opti" value="">
                    Flame Towers
                  </option>
                  <option id="opti" value="">
                    Zaqulba
                  </option>
                  <option id="opti" value="">
                    Shahdag
                  </option>
                  <option id="opti" value="">
                    Aygun Mall
                  </option>
                </select>{" "}
                <br />
                <select
                  class="header_class_label"
                  name="form_name1"
                  id="select"
                >
                  <option id="opti" value="">
                    Days
                  </option>
                  <option id="opti" value="">
                    15 iyun
                  </option>
                  <option id="opti" value="">
                    23iyum
                  </option>
                  <option id="opti" value="">
                    18 iyul
                  </option>
                </select>{" "}
                <br />
                <select
                  class="header_class_label"
                  name="form_name1"
                  id="select"
                >
                  <option id="opti" value="">
                    Seans
                  </option>
                  <option id="opti" value="">
                    11 40 (2D)
                  </option>
                  <option id="opti" value="">
                    12 00(3D)
                  </option>
                  <option id="opti" value="">
                    13 30(3D)
                  </option>
                  <option id="opti" value="">
                    15 40(3D)
                  </option>
                  <option id="opti" value="">
                    16 40(3D)
                  </option>
                </select>
                <button>Ticket buy</button>
              </div>
            </div>
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
