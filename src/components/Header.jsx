import React, { useState, useRef, useEffect } from "react";
import { BsList, BsChevronDown, BsPerson, BsBoxArrowRight } from "react-icons/bs";
import profileImg from "../assets/images/profile-img.png";
import { Link } from "react-router-dom";
import  LogoImg from "../assets/images/premshop-logo.webp"
const Header = ({ toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header_row">

        <div className="header-left">
          <BsList className="menu-icon" onClick={toggleSidebar} />
          <img
            src={LogoImg}
            alt=""
            className="logo"
          />
          <span className="title"></span>
        </div>
        <div className="header-right" ref={dropdownRef}>
          <div
            className="profile-area"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <img src={profileImg} alt="Profile" className="profile-header" />
            <span className="profile_text-inner">
              <span className="username">Balchandra</span>
              <BsChevronDown
                className={`dropdown-icon ${openDropdown ? "rotate" : ""}`}
              />
            </span>
          </div>
          {openDropdown && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/my-profile" className="dropdown-item">
                    <BsPerson className="dropdown-icon-left" />
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link to="/logout" className="dropdown-item">
                    <BsBoxArrowRight className="dropdown-icon-left" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;
