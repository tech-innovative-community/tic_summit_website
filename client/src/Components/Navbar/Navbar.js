import { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [annim, setAnnim] = useState("open");

  const [changeColor, setChangeColor] = useState(false);

  function changeNavBgColor() {
    if (window.scrollY >= 70) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }
  window.addEventListener("scroll", changeNavBgColor);

  return (
    <div className={changeColor ? "nav addedColor" : "nav"}>
      <div className="navLeft">
        <Link to="/" className="link">
          <img src={logo} alt="Tech Innvation Challenge" />
        </Link>
      </div>
      <div className="navCenter">
        <ul className="CenterLinks">
          <li className="centerLinkItems">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="centerLinkItems">Past Events</li>
          <li className="centerLinkItems">
          <Link to="/curriculum" className="link">
                Curriculum
                </Link></li>
          <li className="centerLinkItems">News</li>
          <li className="centerLinkItems">
            <Link to="/faq" className="link">
              FAQ
            </Link>
          </li>
          <li className="centerLinkItems">Contact</li>
          <button className="applyBtn">Apply Now</button>
        </ul>
      </div>
      <div className="menu">
        <div
          className="hamburger"
          onClick={() =>
            setNav(!nav) || setAnnim(annim === "close" ? "open" : "close")
          }
        >
          <span className={annim}></span>
          <span className={annim}></span>
          <span className={annim}></span>
        </div>
        <div
          className={changeColor ? "menuRoutes addedColor" : "menuRoutes"}
          style={{ right: nav ? "0px" : "-60vw" }}
        >
          <ul onClick={() => setNav(false)}>
            <li className="centerLinkItems__mobile">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="centerLinkItems__mobile">Past Events</li>
            <li className="centerLinkItems__mobile">
              <Link to="/curriculum" className="link">
                Curriculum
                </Link>
              </li>
            <li className="centerLinkItems__mobile">News</li>
            <li className="centerLinkItems__mobile">
              <Link to="/faq" className="link">
                FAQ
              </Link>
            </li>
            <li className="centerLinkItems__mobile">Contact</li>
            <button className="applyBtn">Apply Now</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// films to be downloaded
// 12 strong, southpaw

// onClick={() => setNav(false)}
