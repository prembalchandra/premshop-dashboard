import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineExclamationCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BsCreditCardFill } from "react-icons/bs";

const Payments = () => {
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);

    const itemsPerPage = 10;

    // ✅ SAME DATA — बस paymentId ऐड किया गया
    const data = [
        {
            
            paymentId: "PAY101",
            product: "iPhone 15",
            customerName: "John Doe",
            price: "₹82,000",
            payment: "Successful",
            date: "2025-11-01",
            img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
        },
        {
            
            paymentId: "PAY102",
            product: "Samsung S23",
            customerName: "Alice Smith",
            price: "₹1,20,000",
            payment: "Pending",
            date: "2025-11-10",
            img: "https://m.media-amazon.com/images/I/71PXwQzEKaL._SL1500_.jpg",
        },
        {
            
            paymentId: "PAY103",
            product: "AirPods Pro",
            customerName: "Bob Johnson",
            price: "₹22,000",
            payment: "Failed",
            date: "2025-11-05",
            img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
        },
        {
          
            paymentId: "PAY104",
            product: "MacBook Pro",
            customerName: "Emma Wilson",
            price: "₹1,45,000",
            payment: "Successful",
            date: "2025-11-13",
            img: "https://m.media-amazon.com/images/I/71bElkQQ7LL._SL1500_.jpg",
        },
        {
           
            paymentId: "PAY105",
            product: "Smart Watch",
            customerName: "Michael Brown",
            price: "₹12,000",
            payment: "Pending",
            date: "2025-11-18",
            img: "https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1500_.jpg",
        },
    ];

    const dataToShow = filteredData.length ? filteredData : data;
    const totalPages = Math.ceil(dataToShow.length / itemsPerPage);
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = dataToShow.slice(indexOfFirst, indexOfLast);

    const totalEntries = dataToShow.length;
    const startEntry = totalEntries === 0 ? 0 : indexOfFirst + 1;
    const endEntry = Math.min(indexOfLast, totalEntries);

    const handleFilter = () => {
        const filtered = data.filter((item) => {
            const itemDate = new Date(item.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            const searchMatch =
                item.product.toLowerCase().includes(search.toLowerCase()) ||
                item.customerName.toLowerCase().includes(search.toLowerCase()) ||
                item.paymentId.toLowerCase().includes(search.toLowerCase());

            const startMatch = start ? itemDate >= start : true;
            const endMatch = end ? itemDate <= end : true;

            return searchMatch && startMatch && endMatch;
        });

        setFilteredData(filtered);
        setCurrentPage(1);
    };

    const handleReset = () => {
        setSearch("");
        setStartDate("");
        setEndDate("");
        setFilteredData([]);
        setCurrentPage(1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPage = (num) => setCurrentPage(num);

    const getPaymentIcon = (status) => {
        if (status === "Successful")
            return <AiOutlineCheckCircle style={{ color: "green", fontSize: "20px", marginRight: "5px" }} />;
        if (status === "Pending")
            return <AiOutlineExclamationCircle style={{ color: "orange", fontSize: "20px", marginRight: "5px" }} />;
        if (status === "Failed")
            return <AiOutlineCloseCircle style={{ color: "red", fontSize: "20px", marginRight: "5px" }} />;
    };

    return (
        <section className="section-saleproduct">
            <div className="sale-container">
                <div className="dashboard_row">
                    <div className="dashboard_iocn">
                        <BsCreditCardFill />
                    </div>
                    <h1 className="dashboard_heading">Payments</h1>
                </div>

                <div className="card-bg-warrper">
                    <div className="order-product_list">
                        <div className="table-wrapper  table-responsive">
                            <table className="sale-table">
                                <thead className="table-bg-wrapper">
                                    <tr>
                                        <th>S.No</th>
                                        <th>Payment ID</th>   
                                        <th>Customer Product</th>
                                        <th>Customer Name</th>
                                        <th>Product Name</th>
                                        <th>₹ Price</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody className="table-bg-wrapper-inner">
                                    {currentItems.length ? (
                                        currentItems.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{indexOfFirst + index + 1}</td>
                                                <td>{item.paymentId}</td>
                                               
                                                <td>
                                                    <img
                                                        src={item.img}
                                                        alt={item.product}
                                                        style={{
                                                            width: "40px",
                                                            height: "40px",
                                                            objectFit: "cover",
                                                            borderRadius: "6px",
                                                            border: "1px solid #ddd",
                                                        }}
                                                    />
                                                </td>

                                                <td>{item.customerName}</td>
                                                <td>{item.product}</td>
                                                <td>{item.price}</td>
                                                <td>{item.date}</td>

                                                <td>
                                                    <span className="payment-btn" style={{ display: "flex", alignItems: "center" }}>
                                                        {getPaymentIcon(item.payment)}
                                                        {item.payment}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="9" className="no-data">No Products Found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="pagination_info-row">
                            <div className="table-info">
                                Showing {startEntry} to {endEntry} of {totalEntries} entries
                            </div>

                            <div className="pagination">
                                <button onClick={prevPage} disabled={currentPage === 1}>
                                    <BsArrowLeft />
                                </button>

                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        className={currentPage === i + 1 ? "active" : ""}
                                        onClick={() => goToPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button onClick={nextPage} disabled={currentPage === totalPages}>
                                    <BsArrowRight />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payments;
