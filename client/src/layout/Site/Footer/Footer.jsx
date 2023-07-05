import React from 'react'
import "../Footer/Footer.scss"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__logo">
          <img src="https://webstrot.com/html/moviepro/html/images/header/logo.png" alt="" />
        </div>
        <div className="footer__one">
          <div><p>© Movie Pro, 2023</p>
</div>
<div className="footer__one__img">
<div><img src="https://parkcinema.az/addons/shared_addons/themes/new/img/visa.png" alt="" /></div>
<div><img src="https://parkcinema.az/addons/shared_addons/themes/new/img/mastercard.png" alt="" /></div>
        </div>
        </div>
        <div className="footer__two">
        <p id='pp'>order tickets</p>
        <p>+994 12 598 74 14 <br /></p>
        <p>119 ( ödənişli )</p>

        </div>
      </div>
    </>
  )
}

export default Footer
