import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const checkActive = (url) => {
    const { pathname } = location;
    return pathname === url;
  };

  return (
    <header>
      <div className="logoBox" onClick={()=> navigate("/")}>
        <img src="./logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="navBar">
          <li className={checkActive("/") ? "active" : ""}>
            <Link to="/">1st Fluid</Link>
          </li>
          <li className={checkActive("/second-fluid") ? "active" : ""}>
            <Link to="/second-fluid">2st Fluid</Link>
          </li>
          <li className={checkActive("/third-fluid") ? "active" : ""}>
            <Link to="/third-fluid">3st Fluid</Link>
          </li>
          <li className={checkActive("/columns") ? "active" : ""}>
            <Link to="/columns">Columns</Link>
          </li>
          <li className={checkActive("/messages") ? "active" : ""}>
            <Link to="/messages">Message</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
