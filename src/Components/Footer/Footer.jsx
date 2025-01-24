import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.AB} alt="" />
                <p>
                we're passionate about serving up more than just food - we're dedicated to bringing people together. From savory street food to decadent desserts, our platform connects you with the best local eateries and restaurants in town.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.linkedin} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+234-80-953-398</li>
                    <li>Abimbolalatunji@yahoo.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">copyright 2025 @ food-delivery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer