import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SaleProductTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  const saleData = [
    { id: 1, name: "Product A", price: "₹499", qty: 4, date: "2025-11-20" },
    { id: 2, name: "Product B", price: "₹899", qty: 2, date: "2025-11-21" },
    { id: 3, name: "Product C", price: "₹299", qty: 6, date: "2025-11-22" },
    { id: 4, name: "Product D", price: "₹199", qty: 1, date: "2025-11-23" },
    { id: 5, name: "Product E", price: "₹599", qty: 5, date: "2025-11-24" },
    { id: 6, name: "Product F", price: "₹799", qty: 3, date: "2025-11-25" },
    { id: 7, name: "Product G", price: "₹999", qty: 2, date: "2025-11-26" },
    { id: 8, name: "Product H", price: "₹399", qty: 8, date: "2025-11-27" },
    { id: 9, name: "Product I", price: "₹299", qty: 7, date: "2025-11-28" },
    { id: 10, name: "Product J", price: "₹199", qty: 5, date: "2025-11-29" },
    { id: 11, name: "Product K", price: "₹699", qty: 4, date: "2025-11-30" },
  ];

  const dataToShow = filteredData.length ? filteredData : saleData;

  const totalPages = Math.ceil(dataToShow.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = dataToShow.slice(indexOfFirst, indexOfLast);

  const totalEntries = dataToShow.length;
  const startEntry = totalEntries === 0 ? 0 : indexOfFirst + 1;
  const endEntry = Math.min(indexOfLast, totalEntries);

  const handleFilter = () => {
    const filtered = saleData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearch("");
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

  return (
    <section className="section-saleproduct card-bg-warrper">
      <div className="sale-container">
        <div className="filterformpay">
          <h2 className="title">Sale Product List</h2>
          <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="filter-section">
              <div className="search-box filter-section">
                <div className="search-area-box">
                  <label htmlFor="search" className="search-label">Search</label>
                  <input
                    id="search"
                    type="text"
                    className="form-control-search"
                    placeholder="Search Product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
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
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="table-bg-wrapper-inner">
              {currentItems.length ? (
                currentItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{indexOfFirst + index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">
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
    </section>
  );
};

export default SaleProductTable;
