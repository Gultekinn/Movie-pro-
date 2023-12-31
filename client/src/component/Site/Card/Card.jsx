import React, { useEffect, useState } from "react";
import "./Card.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

const Card = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showSeatModal, setShowSeatModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState("1");
  const [selectedPrice, setSelectedPrice] = useState("0");
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/films").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleFilter = (filter) => {
    setFilterType(filter);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleBuyTicket = (film) => {
    setSelectedFilm(film);
    setShowTicketModal(true);
  };

  const handleNumberOfPeopleSelect = (number) => {
    setSelectedNumberOfPeople(number);
    setSelectedPrice(calculatePrice(number));
  };

  const calculatePrice = (number) => {
    // Burada seçilen kişi sayısına göre fiyat hesaplamanızı gerçekleştirin
    // Örnek olarak her kişi için 10 birim fiyatı varsayalım:
    return (10 * parseInt(number)).toString();
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
  
    // Ödeme işlemleri ve doğrulama
    if (!e.target.checkValidity()) {
      toast.error('Please fill out all fields');
      return;
    }
  
    console.log('Payment submitted!');
    toast.success('Payment complete');
    // Ödeme işlemini tamamladıktan sonra gerekli aksiyonları gerçekleştirin
  };
  

  const handleTicketModalClose = () => {
    setShowTicketModal(false);
    setSelectedFilm(null);
    setSelectedNumberOfPeople("1");
    setSelectedPrice("0");
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
    setSelectedFilm(null);
    setSelectedNumberOfPeople("1");
    setSelectedPrice("0");
  };

  const handlePayment = () => {
    setShowTicketModal(false);
    setShowSeatModal(true);
  };

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleSeatModalClose = () => {
    setShowSeatModal(false);
    setSelectedSeats([]);
  };

  const handleSeatModalNext = () => {
    if (selectedSeats.length < parseInt(selectedNumberOfPeople)) {
      alert("Please select the required number of seats.");
    } else {
      setShowSeatModal(false);
      setShowPaymentModal(true);
    }
  };

  const filteredItems = data.filter((item) => {
    const titleMatch =
      item.title &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const typeMatch =
      filterType === "All" || item.filmType.includes(filterType);
    const languageMatch =
      selectedLanguage === "All" ||
      item.languageType.includes(selectedLanguage);
    return titleMatch && typeMatch && languageMatch;
  });

  return (
    <>
      <div className="section">
        <div className="language-select">
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageSelect(e.target.value)}
          >
            <option value="All">All</option>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="TR">TR</option>
          </select>
        </div>
        <div className="section__button">
          <div>
            <button onClick={() => handleFilter("All")}>All</button>
          </div>
          <div>
            <button onClick={() => handleFilter("2D")}>2D</button>
          </div>
          <div>
            <button onClick={() => handleFilter("3D")}>3D</button>
          </div>
        </div>
      </div>

      <input
        id="put"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="common">
        {filteredItems.map((item, index) => (
          <div key={index} className="common__card">
            <div className="common__card__img">
              <img
                src={`http://localhost:8080/public/${item.mainimage}`}
                alt="img"
              />
            </div>
         <h3>{item.title}</h3> 
            <p>{item.date}</p>
            <p>{item.filmType}</p>

            <div className="div">
              <div>
                <p id="language">{item.languageType}</p>
              </div>
              <div className="old">{item.age}+</div>
            </div>
            <button id="ticket" onClick={() => handleBuyTicket(item)}>
              Buy a ticket
            </button>
          </div>
        ))}
      </div>

      {showTicketModal && selectedFilm && (
        <div className="ticket-modal-overlay">
          <div className="ticket-modal">
            <h2>Ticket</h2>
            <p>Film: {selectedFilm.title}</p>
            <form onSubmit={handlePayment}>
              <label>
                Number of People:
                <select
                  value={selectedNumberOfPeople}
                  onChange={(e) => handleNumberOfPeopleSelect(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">6</option>
                  <option value="8">7</option>
                  <option value="9">8</option>
                  <option value="10">9</option>
                </select>
              </label>
              <label>
                Price:
                <input type="text" value={selectedPrice} readOnly />
              </label>
              <button type="submit">Next</button>
            </form>
            <button onClick={handleTicketModalClose}>Close</button>
          </div>
        </div>
      )}

      {showSeatModal && selectedFilm && (
        <div className="seat-modal-overlay">
          <div className="seat-modal">
            <h2>Seat</h2>
            <p>Film: {selectedFilm.title}</p>
            <p>Number of People: {selectedNumberOfPeople}</p>
            <div className="seat-grid">
              {Array.from({ length: 50 }, (_, index) => (
                <div
                  key={index}
                  className={`seat ${
                    selectedSeats.includes(index) ? "selected" : ""
                  }`}
                  onClick={() => handleSeatSelection(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <button className="seat__button" onClick={handleSeatModalNext}>
              Next
            </button>
            <button className="seat__button" onClick={handleSeatModalClose}>
              Close
            </button>
          </div>
        </div>
      )}

      {showPaymentModal && selectedFilm && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <h2>Payment Modal</h2>
            <p>Film: {selectedFilm.title}</p>
            <p>Number of People: {selectedNumberOfPeople}</p>
            <p>Price: {selectedPrice}</p>
            <form onSubmit={handlePaymentSubmit}>
              <label>
                Card Number:
                <input type="text" name="cardNumber"  placeholder="XXXX XXXX XXXX XXXX"/>
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
                <input type="text" name="cvv" placeholder="XX/XX" />
              </label>
              <button type="submit">Pay</button>
            </form>
            <button onClick={handlePaymentModalClose}>Close</button>
          </div>
        </div>
      )}
      <Toaster/>
    </>
  );
};

export default Card;
