import React from "react";
import logo from "../../../design/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
          <div className="footer-top">
              <div className="container">
                  <div className="footer-top-inner">
            <div className="footer-social">
              <img src={logo} alt="logo" />
              <ul className="social">
                <li>{<FaInstagram/>}</li>
                <li>{<FaFacebookF/>}</li>
                <li>{<FaYoutube/>}</li>
                <li>{<FaTwitter/>}</li>
              </ul>
            </div>
            <ul className="footer-menus">
              <h3>Menu</h3>
              <li>
                <Link to=''>Yeni</Link>
              </li>
              <li>
                <Link to=''>Endirimlər</Link>
              </li>
              <li>
                <Link to=''>Endirimlər</Link>
              </li>
              <li>
                <Link to=''>Bütün brendlər</Link>
              </li>
            </ul>
            <ul className="footer-menus">
              <h3>Kömək</h3>
              <li>
                <Link to=''>Tez-tez soruşulan suallar</Link>
              </li>
              <li>
                <Link to=''>Çatdırılma xidməti</Link>
              </li>
              <li>
                <Link to=''>Geri qaytarılma şərtləri</Link>
              </li>
            </ul>
            <ul className="footer-menus">
              <h3>Əlaqə</h3>
              <li>
                {<GrLocation/>}
                M. K. Ataturk avenue 89, Baku, Azerbaijan
              </li>
              <li>
                {<FaEnvelope/>}
                example@gmail.com
              </li>
              <li>
                {<MdCall/>}
                *2108
              </li>
            </ul>
            </div>
          </div>
          <div className="footer-bottom">
              <div className="container">
                  <div className="footer-bottom-inner">
                  <div className="copyright">
              PeojectX 2021. Bütün hüquqlar qorunur.
              </div>
              <div className="secrety">
                  <Link to=''>Qaydalar və şərtlər</Link>
                  <Link to=''>Məxfilik siyasəti</Link>
              </div>
                  </div>
              </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
