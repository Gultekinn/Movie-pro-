import React, { useEffect, useState } from "react";
import "../VIP/Vip.scss";
import VipCard from "../../../component/Site/Vipcard/VipCard";
import Loading from "../../../component/Loading/Loading";

const ViP = () => {
  const [loading, setLoading] = useState(false);
  const [filmler, setFilmler] = useState([]);
  const [seciliFilm, setSeciliFilm] = useState("");

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    // API isteğini taklit etmek için gecikme ekledik
    setTimeout(() => {
      setLoading(false);
      setFilmler([
        { id: 1, baslik: "Spider-Man" },
        { id: 2, baslik: "Barbie" },
        { id: 3, baslik: "Secret İnvasion" },
        { id: 4, baslik: "Atatürk" },
        { id: 5, baslik: "Bugimen" },
      ]);
    }, 1500);
  }, []);

  const handleFilmSecimi = (e) => {
    setSeciliFilm(e.target.value);
  };

  const handleMovieTickets = (movieId, session) => {
    // movie_tickets fonksiyonunun gerçek işlevini burada tanımlayın
    console.log("Bilet satın alınacak film ID'si:", movieId);
    console.log("Seans:", session);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="section1">
            <img
              src="https://parkcinema.az/addons/shared_addons/themes/new/img/vip-lounge2.jpg"
              alt=""
            />
          </div>
          <h1>Azal Club VIP Salonu</h1>

          <div className="buttons">
            <div>
              <button>Tabela</button>
            </div>
            <div>
              <button>Azal Club VIP Salonu</button>
            </div>
          </div>

          <div className="section2">
            <div className="section2__left">
              <select
                className="header_class_label"
                name="form_name1"
                id="select"
                onChange={handleFilmSecimi}
                value={seciliFilm}
              >
                <option value="">Filmler</option>
                {filmler.map((film) => (
                  <option key={film.id} value={film.baslik}>
                    {film.baslik}
                  </option>
                ))}
              </select>
            </div>
            <div className="section2__right">
              <div className="dayline-bar">
                <div className="dayline-bar__hours">
                  <div>10:00</div>
                  <div>11:00</div>
                  <div>12:00</div>
                  <div>13:00</div>
                  <div>14:00</div>
                  <div>15:00</div>
                  <div>16:00</div>
                  <div>17:00</div>
                  <div>18:00</div>
                  <div>19:00</div>
                  <div>20:00</div>
                  <div>21:00</div>
                  <div>22:00</div>
                  <div>23:00</div>
                  <div>24:00</div>
                  <div>01:00</div>
                  <div>02:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="data-table">
            <div className="hour-line"></div>
            <div className="dt-row">
              <div className="dtr-left">Seans</div>
              <div className="dtr-right">
                <div className="hours">
                  {seciliFilm && (
                    <div
                      className="tooltip filterable visible-hour t14-5 vip-session"
                      onClick={() => handleMovieTickets(253269, 1)}
                      data-format="format2"
                      data-hall="Azal Club VIP Hall"
                      data-class="t14-5 vip-session"
                      data-hasqtip="1"
                      oldtitle="Böyüklər: 10.00 AZN"
                      title=""
                      aria-describedby="qtip-1"
                    >
                      14:40
                      <div className="d"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <VipCard />
        </div>
      )}
    </>
  );
};

export default ViP;
