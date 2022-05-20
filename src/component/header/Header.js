import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

import "./Header.scss";
function Header() {
  const [showlHideMoal, setshowlHideMoal] = useState(false);
  const handleShowHideMoadl = () => {
    setshowlHideMoal(!showlHideMoal);
  };
  return (
    <>
      <div className="wapp-header">
        <div className="header-ctn">
          <div className="header-left">
            <img
              src="https://www.simicart.com/pwa/static/media/simicart-logo.75850400.svg"
              width={100}
            />
          </div>

          <div className="header-nav">
            <nav>
              <ul>
                <li>
                  <Link to="/">Solutions</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/customers">Customers</Link>
                </li>
                <li>
                  <Link to="/">Resources</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <button className="btn-book">Book a call</button>
            <button onClick={handleShowHideMoadl} className="btn-login">
              Login
            </button>
          </div>
          {showlHideMoal && (
            <Modal showlHideMoal handleShowHideMoadl={handleShowHideMoadl} />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
