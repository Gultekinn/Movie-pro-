import React from 'react'
import "../Campaign/Campaign.scss"
import CampaingCard from '../../../component/Site/CampaingCard/CampaingCard'
const Campaign = () => {
  return (
    <div>
      <div className="section1">
        <img src="https://parkcinema.az/addons/shared_addons/themes/new/img/movie-bg2-small.jpg" alt="" />
      </div>

<h1>Campaign</h1>

<div class="header_class">
    <select class="header_class_label" name="form_name1" id="select" >
    <option id="opti" value="">Kinoteatrlar</option>
            <option id="opti" value="">Park Bulvar</option>
            <option id="opti"  value="">Metro Park</option>
            <option id="opti"  value="">Flame Towers</option>
            <option id="opti"  value="">Zaqulba</option>
            <option id="opti"  value="">Shahdag</option>
            <option id="opti"  value="">Aygun Mall</option>
    </select>
</div>
<CampaingCard/>
    </div>
  )
}

export default Campaign
