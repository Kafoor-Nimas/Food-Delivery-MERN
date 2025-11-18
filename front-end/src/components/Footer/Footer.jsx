import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            DelishDrop is your trusted online food delivery partner, bringing your favorite meals straight to your doorstep with speed and convenience. Built with the MERN stack for reliability and performance, our platform ensures a smooth browsing and ordering experience. From local restaurants to premium cuisines, we connect you with the best flavors around you. Order now and enjoy fresh, delicious food delivered with care — anytime, anywhere.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0758250089</li>
            <li>funnimas2002@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; Tomato.com - All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
