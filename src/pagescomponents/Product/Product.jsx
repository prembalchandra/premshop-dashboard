import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
const OrderProductTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  const data = [
    { id: 101, category: "Mobile", productCount: 15, img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg" },
    { id: 102, category: "Mobile", productCount: 10, img: "https://m.media-amazon.com/images/I/71PXwQzEKaL._SL1500_.jpg" },
    { id: 103, category: "Accessories", productCount: 30, img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg" },
    { id: 104, category: "Laptop", productCount: 5, img: "https://m.media-amazon.com/images/I/71bElkQQ7LL._SL1500_.jpg" },
    { id: 105, category: "Wearable", productCount: 25, img: "https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1500_.jpg" },
  ];

  const dataToShow = filteredData.length ? filteredData : data;
  const totalPages = Math.ceil(dataToShow.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = dataToShow.slice(indexOfFirst, indexOfLast);

  const totalEntries = dataToShow.length;
  const startEntry = totalEntries === 0 ? 0 : indexOfFirst + 1;
  const endEntry = Math.min(indexOfLast, totalEntries);

  // Search filter
  const handleFilter = () => {
    const filtered = data.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
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
    <section className="section-saleproduct">
      <div className="sale-container">
        <div className="dashboard_row">
          <div className="dashboard_iocn">
            <FiShoppingCart />
          </div>
          <h1 className="dashboard_heading">Category By Product List</h1>
        </div>

        <div className="card-bg-warrper">
          <div className="order-product_list">
            <div className="filterformpay">
              <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="filter-section">
                  <div className="search-area-box">
                    <label htmlFor="search" className="search-label">Search</label>
                    <input
                      id="search"
                      type="text"
                      className="form-control-search"
                      placeholder="Search Category By Product ..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
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

            {/* Table */}
            <div className="table-wrapper table-responsive">
              <table className="sale-table">
                <thead className="table-bg-wrapper">
                  <tr>
                    <th>S.NO</th>
                    <th>Category ID</th>
                    <th>Category Image</th>
                    <th>Category Name</th>
                    <th>Product Count</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody className="table-bg-wrapper-inner">
                  {currentItems.length ? (
                    currentItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>{indexOfFirst + index + 1}</td>
                        <td>{item.id}</td>
                        <td>
                          <img
                            src={item.img}
                            alt={item.category}
                            style={{
                              width: "55px",
                              height: "55px",
                              objectFit: "cover",
                              borderRadius: "6px",
                              border: "1px solid #ddd",
                            }}
                          />
                        </td>
                        <td>{item.category}</td>
                        <td>{item.productCount}</td>
                        <td>

                          <Link to="/products/ProductView" className="action-btn view-btn" title="View Details"><FiEye /></Link>
                     
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="no-data">
                        No Products Found
                      </td>
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

export default OrderProductTable;
