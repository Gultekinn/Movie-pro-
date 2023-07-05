import React, { useEffect, useState } from "react";
import Loading from "../../../component/Loading/Loading";
import "../Contact/Contact.scss";
import axios from "axios";
const Contact = () => {
  const [isActiv, setIsActiv] = useState(false);
  const [data, setData] = useState();
  // const handleClick = () => {
  //   setIsActiv(!isActiv);
  // };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/contacts").then((res) => {
      setData(res.data);
    });
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div id="body">
          <section>
            <h1>Contact us</h1>
            {/* <div className="button">
  <div><button className={isActiv ? 'active': "" } onClick={handleClick}>Park Bulvar</button></div>
  <div><button>Metro Park</button></div>
  <div><button>Flame Towers</button></div>
  <div><button >Zaqulba</button></div>




  
</div> */}
            <div className="commonns">
              {/* parkbulvar */}
              <div>
                {data &&
                  data.map((item, index) => {
                    return (
                      <div key={index} class="contact-info parkbulvar">
                        <div class="contact-info-item">
                          <div class="contact-info-icon">
                            <i class="fas fa-home"></i>
                          </div>

                          <div class="contact-info-content">
                            <h4>Address</h4>
                            <p>{item.address}</p>
                          </div>
                        </div>

                        <div class="contact-info-item">
                          <div class="contact-info-icon">
                            <i class="fas fa-phone"></i>
                          </div>

                          <div class="contact-info-content">
                            <h4>Phone</h4>
                            <p>{item.mainPhone}</p>
                          </div>
                        </div>

                        <div class="contact-info-item">
                          <div class="contact-info-icon">
                            <i class="fas fa-envelope"></i>
                          </div>

                          <div class="contact-info-content">
                            <h4>Email</h4>
                            <p>{item.email}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div class="contact-form">
                <form action="" id="contact-form">
                  <h2>Send Message</h2>
                  <div class="input-box">
                    <input type="text" required="true" name="" />
                    <span>Full Name</span>
                  </div>

                  <div class="input-box">
                    <input type="email" required="true" name="" />
                    <span>Email</span>
                  </div>

                  <div class="input-box">
                    <textarea required="true" name=""></textarea>
                    <span>Type your Message...</span>
                  </div>

                  <div class="input-box">
                    <input type="submit" value="Send" name="" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Contact;
