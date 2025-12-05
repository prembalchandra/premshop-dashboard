import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";   // ⭐ ADD THIS

const UserTable = () => {
  const navigate = useNavigate();   // ⭐ ADD THIS

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  const data = [
    {
      id: 1,
      name: "Rohit Sharma",
      phone: "9876543210",
      email: "rohit@example.com",
      address: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      name: "Pooja Patel",
      phone: "9988776655",
      email: "pooja@example.com",
      address: "Ahmedabad, Gujarat",
    },
    {
      id: 3,
      name: "Amit Verma",
      phone: "9090909090",
      email: "amit@example.com",
      address: "Delhi, India",
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
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.phone.includes(search) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearch("");
    setFilteredData([]);
    setCurrentPage(1);
  };

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goToPage = (num) => setCurrentPage(num);

  // ⭐ FUNCTION FOR CLICK
  const handleUserClick = (user) => {
    navigate(`/user-profile/${user.id}`, { state: user });
  };

  return (
    <section className="section-saleproduct">
      <div className="sale-container">

        <div className="dashboard_row">
          <div className="dashboard_iocn">
            <FaUser />
          </div>
          <h1 className="dashboard_heading">User Details</h1>
        </div>

        <div class="card-bg-warrper">
          {/* Search Filter */}
          <div className="filterformpay">
            <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="filter-section">
                <div className="search-area-box">
                  <label htmlFor="search">Search</label>
                  <input
                    id="search"
                    type="text"
                    className="form-control-search"
                    placeholder="Search by Name / Phone / Email ..."
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
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>User Phone</th>
                  <th>User Email</th>
                  <th>User Address</th>
                </tr>
              </thead>

              <tbody className="table-bg-wrapper-inner">
                {currentItems.length ? (
                  currentItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>{indexOfFirst + index + 1}</td>
                      <td>{item.id}</td>

                      {/* ⭐ USER NAME CLICKABLE */}
                      <td
                        style={{ color: "#007bff", cursor: "pointer" }}
                        onClick={() => handleUserClick(item)}
                      >
                        {item.name}
                      </td>

                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-data">
                      No Users Found
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
                  onClick={() => goToPage(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
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
    </section>
  );
};

export default UserTable;
