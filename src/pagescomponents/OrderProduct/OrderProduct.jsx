import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const OrderProductTable = () => {
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);

    const itemsPerPage = 10;

    const data = [
        {
            id: 101,
            product: "iPhone 15",
            qty: 1,
            price: "₹82,000",
            payment: "Successful",
            date: "2025-11-01",
            img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
        },
        {
            id: 102,
            product: "Samsung S23",
            qty: 2,
            price: "₹1,20,000",
            payment: "Pending",
            date: "2025-11-10",
            img: "https://m.media-amazon.com/images/I/71PXwQzEKaL._SL1500_.jpg",
        },
        {
            id: 103,
            product: "AirPods Pro",
            qty: 1,
            price: "₹22,000",
            payment: "Failed",
            date: "2025-11-05",
            img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
        },
        {
            id: 104,
            product: "MacBook Pro",
            qty: 1,
            price: "₹1,45,000",
            payment: "Successful",
            date: "2025-11-13",
            img: "https://m.media-amazon.com/images/I/71bElkQQ7LL._SL1500_.jpg",
        },
        {
            id: 105,
            product: "Smart Watch",
            qty: 3,
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

    // ⭐ DATE + SEARCH FILTER
    const handleFilter = () => {
        const filtered = data.filter((item) => {
            const itemDate = new Date(item.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            const searchMatch = item.product.toLowerCase().includes(search.toLowerCase());
            const startMatch = start ? itemDate >= start : true;
            const endMatch = end ? itemDate <= end : true;

            return searchMatch && startMatch && endMatch;
        });

        setFilteredData(filtered);
        setCurrentPage(1);
    };

    // RESET FILTER
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

    const getPaymentClass = (status) => {
        if (status === "Successful") return "payment-success payment-btn";
        if (status === "Pending") return "payment-pending payment-btn";
        if (status === "Failed") return "payment-failed payment-btn";
    };

    return (
        <section className="section-saleproduct">
            <div className="sale-container">
                <div className="dashboard_row">
                    <div className="dashboard_iocn">
                        <FiShoppingCart />
                    </div>
                    <h1 className="dashboard_heading">Order Product List</h1>
                </div>

                <div className="card-bg-warrper">
                    <div className="order-product_list">
                        <div className="filterformpay">
                            <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="filter-section">
                                    <div className="search-area-box">
                                        <label htmlFor="search" className="search-label">
                                            Search
                                        </label>
                                        <input
                                            id="search"
                                            type="text"
                                            className="form-control-search"
                                            placeholder="Search Product..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>

                                    {/* ⭐ DATE FILTER START */}
                                    <div className="search-area-box">
                                        <label className="search-label">Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control-search"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>

                                    <div className="search-area-box">
                                        <label className="search-label">End Date</label>
                                        <input
                                            type="date"
                                            className="form-control-search"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </div>
                                    {/* ⭐ DATE FILTER END */}

                                    <div className="btn-group filter-btn-group">
                                        <button type="button" className="btn-filter" onClick={handleFilter}>
                                            Filter
                                        </button>
                                        <button type="button" className="btn-reset" onClick={handleReset}>
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="table-wrapper">
                            <table className="sale-table">
                                <thead className="table-bg-wrapper">
                                    <tr>
                                        <th>S.NO</th>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Image</th>
                                        <th>₹ Price</th>
                                        <th>Qty</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody className="table-bg-wrapper-inner">
                                    {currentItems.length ? (
                                        currentItems.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{indexOfFirst + index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.product}</td>

                                                <td>
                                                    <img
                                                        src={item.img}
                                                        alt={item.product}
                                                        style={{
                                                            width: "55px",
                                                            height: "55px",
                                                            objectFit: "cover",
                                                            borderRadius: "6px",
                                                            border: "1px solid #ddd",
                                                        }}
                                                    />
                                                </td>

                                                <td>{item.price}</td>
                                                <td>{item.qty}</td>
                                                <td>{item.date}</td>

                                                <td>
                                                    <span className={getPaymentClass(item.payment)}>
                                                        {item.payment}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="no-data">
                                                No Products Found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

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

export default OrderProductTable;
