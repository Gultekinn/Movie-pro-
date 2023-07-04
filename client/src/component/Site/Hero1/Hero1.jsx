import React from "react";
import "../Hero1/Hero1.scss";
import Card from "../Card/Card";
const Hero1 = () => {
  return (
    <>

<hr id="hr" />
      <div className="Hero">
     
        </div>
<div className="section">
    <div className="section__button">
        <div><button>All</button></div>
        <div><button>2D</button></div>
        <div><button>3D</button></div>
    </div>



    <div class="header_class">
    <select class="header_class_label" name="form_name1" id="" >
    <option id="opti" value="">Kinoteatrlar</option>
            <option id="opti" value="">Park Bulvar</option>
            <option id="opti"  value="">Metro Park</option>
            <option id="opti"  value="">Flame Towers</option>
            <option id="opti"  value="">Zaqulba</option>
            <option id="opti"  value="">Shahdag</option>
            <option id="opti"  value="">Aygun Mall</option>
    </select>
</div>

<Card/>





</div>
    </>
  );
};

export default Hero1;
