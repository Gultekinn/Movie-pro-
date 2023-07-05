import React, { useState } from "react";
import Slider from "react-slick";
import "../SlickSlider/Slider.scss";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function SimpleSlider() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleBuyTicket = (film) => {
    setSelectedFilm(film);
    setShowPaymentModal(true);
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Payment form submission logic here
    console.log("Payment submitted!");
    // Perform necessary actions after payment completion
  };

  const films = [
    {
      id: 1,
      title: "Doctor Strange",
      image:
        "https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
      format: "2D / 3D",
      language: "EN",
      rating: 4,
    },
    {
      id: 2,
      title: "Spider-Man: Homecoming",
      image:
        "https://cdn.marvel.com/content/1x/spider-manhomecoming_lob_crd_02.jpg",
      format: "2D / 3D",
      language: "EN",
      rating: 4,
    },
    {
      id: 3,
      title: "X-Men: Days of Future Past",
      image:
        "https://cdn.marvel.com/content/1x/fox_x-mendaysoffuturepast_lob_crd_01.jpg",
      format: "2D / 3D",
      language: "EN",
      rating: 4,
    },
  ];

  return (
    <>
      <Slider {...settings} className="slider">
        {films.map((film) => (
          <div className="slider__div" key={film.id}>
            <div className="slider__div__img">
              <img src={film.image} alt="" />
            </div>
            <div className="slider__div__content">
              <h4>{film.title}</h4>
              <p>Multiverse of Madness</p>
              <p>{film.format}</p>
              <p>{film.language}</p>
              <p className="startt">
                {Array.from({ length: film.rating }, (_, index) => (
                  <StarRateIcon key={index} />
                ))}
                <StarBorderIcon />
              </p>
              <button onClick={() => handleBuyTicket(film)} id="ticket">
                Buy a Ticket
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {showPaymentModal && selectedFilm && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <h2>Payment Modal</h2>
            <p>Film: {selectedFilm.title}</p>
            <form onSubmit={handlePaymentSubmit}>
              <label>
                Card Number:
                <input type="text" name="cardNumber" />
              </label>
              <label>
                Card Holder:
                <input type="text" name="cardHolder" />
              </label>
              <label>
                Expiry Date:
                <input type="text" name="expiryDate" />
              </label>
              <label>
                CVV:
                <input type="text" name="cvv" />
              </label>
              <button type="submit">Pay</button>
            </form>
            <button onClick={handlePaymentModalClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
