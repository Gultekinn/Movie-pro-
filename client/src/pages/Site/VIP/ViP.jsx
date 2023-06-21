import React from "react";
import "../VIP/Vip.scss";
import VipCard from "../../../component/Site/Vipcard/VipCard";
const ViP = () => {
  return (
    <div>
      <div className="section1">
        <img
          src="https://parkcinema.az/addons/shared_addons/themes/new/img/vip-lounge2.jpg"
          alt=""
        />
      </div>
      <h1>Azal Club VİP Hall</h1>

      <div className="buttons">
        <div>
          <button>Tabel</button>
        </div>
        <div>
          <button>Azal Club VİP Hall</button>
        </div>
      </div>

      <div className="section2">
        <div className="section2__left">
          <select class="header_class_label" name="form_name1" id="select">
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
          <div className="dtr-left">Fles</div>
          <div className="dtr-right">
            <div className="hours">
              <div
                class="tooltip filterable visible-hour t14-5 vip-session"
                onclick="movie_tickets(253269, 1)"
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
            </div>
          </div>
        </div>
      </div>


<VipCard/>
    </div>
  );
};

export default ViP;
