import React from "react";
import { FiPlusCircle, FiShoppingCart, FiBox, FiTruck } from "react-icons/fi";
import { BsGridFill } from "react-icons/bs"; // Dashboard icon
import SaleProductTable from "./Product/SaleProductTable";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const cardData = [
    { title: "New Product", count: 120, icon: <FiPlusCircle />, className: "card-new" , link: "/dashboard", },
    { title: "Sale Product", count: 85, icon: <FiShoppingCart />, className: "card-sale" , link: "/dashboard", },
    { title: "Total Product", count: 450, icon: <FiBox />, className: "card-total" , link: "/dashboard",},
    { title: "Order Product", count: 230, icon: <FiTruck />, className: "card-order", link: "/dashboard", },
  ];

  return (
    <>
      <section className="dashboard_section-area">
        <div className="dashboard_top_inrer">
         <div className="dashboard_top_inner_row">
            <div className="dashboard_row">
            <div className="dashboard_iocn">
              <BsGridFill />
            </div>
             <h1 className="dashboard_heading">
             Dashboard
          </h1>
          </div>
          <div className="dashboard_btn ">
           <Link to="/dashboard">
               <FiPlus size={20} />
            <span>New Product</span>
           </Link>
          </div>
         
         </div>


          <div className="card-bg-warrper">
            <div className="cards-wrapper">
              {cardData.map((item, index) => (
                
                <Link to={item.link} key={index} className={`card ${item.className}`}>
                  <div className="card-icon">{item.icon}</div>
                  <div className="card-content">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-count">{item.count}</p>
                  </div>
                   </Link>
              ))}

            </div>

          </div>

        </div>
      </section>

      <SaleProductTable />
    </>
  );
};

export default Dashboard;
