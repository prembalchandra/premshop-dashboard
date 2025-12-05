import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  BsGridFill, BsPeopleFill, BsBoxSeam, BsCreditCardFill,
  BsBox, BsCardList, BsCartCheck, BsChevronDown, BsChevronUp, BsStarFill
} from "react-icons/bs";

import profileImg from "../assets/images/profile-img.png";

const Sidebar = ({ isOpen }) => {
  const [openMenus, setOpenMenus] = useState({});
  const toggleSubMenu = (name) => {
    setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const menuItems = [
    { name: "Dashboard", icon: <BsGridFill />, path: "/dashboard" },
    { name: "User", icon: <BsPeopleFill />, path: "/user" },
    { name: "Categories", path: "/categories", icon: <BsBox /> },
    { name: "Orders", icon: <BsBoxSeam />, path: "/order-product" },
    { name: "Payments", icon: <BsCreditCardFill />, path: "/payments" },
    { 
      name: "Products", 
      icon: <BsBox />, 
      subMenu: [
        { name: "All Products", path: "/products/product", icon: <BsCardList /> },
        { name: "Add Product", path: "/products/add-product", icon: <BsCartCheck /> },
      ] 
    },
   
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="profile">
        <div className="sidebar-profile">
          <div className="part-img">
             <img src={profileImg} alt="Profile" className="profile-pic" />
          </div>
          <div className="profile-text">
            <h3 className="profile-name">Balchandra</h3>
            <div className="profile-rating" style={{ display: "flex", gap: "4px", marginTop: "11px", justifyContent:"center" }}>
              <BsStarFill color="#FFD700" />
              <BsStarFill color="#FFD700" />
              <BsStarFill color="#FFD700" />
              <BsStarFill color="#FFD700" />
            </div>
          </div>
        </div>
      </div>

      <ul className="sidebar-menu" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {menuItems.map((item) => (
          <li key={item.name} className="sidebar-item">
            {item.subMenu ? (
              <>
                <div 
                  className="sidebar-link submenu-toggle" 
                  onClick={() => toggleSubMenu(item.name)}
                  style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px" }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="icon">{item.icon}</span>
                    <span className="text">{item.name}</span>
                  </span>
                  <span>{openMenus[item.name] ? <BsChevronUp /> : <BsChevronDown />}</span>
                </div>
                {openMenus[item.name] && (
                  <ul className="submenu" style={{ listStyle: "none", paddingLeft: "20px" }}>
                    {item.subMenu.map(sub => (
                      <li key={sub.name} className="sidebar-subitem sidebar-item">
                        <NavLink 
                          to={sub.path} 
                          className={({ isActive }) => isActive ? "active sidebar-link" : "sidebar-link"}
                          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 13px" }}
                        >
                          <span className="icon">{sub.icon}</span>
                          <span className="text">{sub.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? "active sidebar-link" : "sidebar-link"}
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 15px" }}
              >
                <span className="icon">{item.icon}</span>
                <span className="text">{item.name}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
