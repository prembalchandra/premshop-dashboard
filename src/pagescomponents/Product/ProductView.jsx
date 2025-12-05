import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiShoppingCart, FiEdit } from "react-icons/fi";
const ToggleSwitch = ({ status, onToggle }) => {
  return (
    <div
      className={`toggle-switch ${status === "active" ? "active" : "inactive"}`}
      onClick={onToggle}
    >
      <div className="toggle-circle"></div>
    </div>
  );
};

const ProductView = () => {
  const NA = "N/A"; 

  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 101,
      product: "iPhone 15",
      oldPrice: "₹90,000",
      newPrice: "₹82,000",
      offer: "10% Off",
      description: "Latest Apple iPhone 15",
      date: "2025-11-01",
      img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
      status: "active",
    },
    {
      id: 102,
      product: "Samsung S23 Ultra",
      oldPrice: "₹1,30,000",
      newPrice: "₹1,20,000",
      offer: "8% Off",
      description: "Flagship Samsung S23 Ultra",
      date: "2025-11-10",
      img: "https://m.media-amazon.com/images/I/71PXwQzEKaL._SL1500_.jpg",
      status: "inactive",
    },
    {
      id: 103,
      product: "Vivo V29 Pro",
      oldPrice: "₹45,000",
      newPrice: "₹40,000",
      offer: "12% Off",
      description: "Vivo V29 Pro with curved display",
      date: "2025-11-05",
      img: "https://m.media-amazon.com/images/I/71vtttI7HML._SL1500_.jpg",
      status: "active",
    },
    {
      id: 104,
      product: "Oppo Reno 10 Pro",
      oldPrice: "₹43,999",
      newPrice: "₹39,999",
      offer: "9% Off",
      description: "Oppo Reno 10 Pro with 80W charging",
      date: "2025-10-21",
      img: "https://m.media-amazon.com/images/I/714RmT70trL._SL1500_.jpg",
      status: "inactive",
    },
    {
      id: 105,
      product: "OnePlus 12R",
      oldPrice: "₹48,000",
      newPrice: "₹45,000",
      offer: "6% Off",
      description: "OnePlus 12R Snapdragon 8 Gen chipset",
      date: "2025-11-14",
      img: "https://m.media-amazon.com/images/I/61u1VALn6JL._SL1500_.jpg",
      status: "active",
    },
    {
      id: 106,
      product: "Xiaomi 14 Pro",
      oldPrice: "₹56,000",
      newPrice: "₹52,000",
      offer: "7% Off",
      description: "Xiaomi 14 Pro with Leica cameras",
      date: "2025-11-11",
      img: "https://m.media-amazon.com/images/I/71jqxQUNReL._SL1500_.jpg",
      status: "inactive",
    },
    {
      id: 107,
      product: "Realme GT 5",
      oldPrice: "₹39,999",
      newPrice: "₹36,999",
      offer: "8% Off",
      description: "Realme GT 5 with 150W fast charging",
      date: "2025-11-02",
      img: "https://m.media-amazon.com/images/I/710VRx2VRzL._SL1500_.jpg",
      status: "active",
    },
    {
      id: 108,
      product: "Google Pixel 8",
      oldPrice: "₹75,000",
      newPrice: "₹70,000",
      offer: "7% Off",
      description: "Google Pixel 8 with Tensor G3",
      date: "2025-10-18",
      img: "https://m.media-amazon.com/images/I/71canFl2+cL._SL1500_.jpg",
      status: "inactive",
    },
    {
      id: 109,
      product: "iQOO 12",
      oldPrice: "₹62,000",
      newPrice: "₹58,000",
      offer: "",
      description: "iQOO 12 with SD 8 Gen 3",
      date: "2025-10-26",
      img: "https://m.media-amazon.com/images/I/71pC69I3lzL._SL1500_.jpg",
      status: "active",
    },
    {
      id: 110,
      product: "Moto Edge 50 Pro",
      oldPrice: "₹35,000",
      newPrice: "₹31,999",
      offer: "9% Off",
      description: "Motorola Edge 50 Pro",
      date: "2025-11-12",
      img: "https://m.media-amazon.com/images/I/71i-MPfq34L._SL1500_.jpg",
      status: "inactive",
    },
    {
      id: 111,
      product: "Poco F6 Pro",
      oldPrice: "₹39,999",
      newPrice: "₹36,999",
      offer: "7% Off",
      description: "Poco F6 Pro Snapdragon flagship chip",
      date: "2025-10-30",
      img: "https://m.media-amazon.com/images/I/71cU3U4nAUL._SL1500_.jpg",
      status: "active",
    },
    {
      id: 112,
      product: "Infinix Zero Ultra",
      oldPrice: "₹29,999",
      newPrice: "₹26,999",
      offer: "10% Off",
      description: "Infinix Zero Ultra 200MP camera",
      date: "2025-11-07",
      img: "https://m.media-amazon.com/images/I/71HPzV6tBtL._SL1500_.jpg",
      status: "inactive",
    },
    {
      id: 113,
      product: "Nokia X30 5G",
      oldPrice: "₹48,000",
      newPrice: "₹44,000",
      offer: "8% Off",
      description: "Nokia X30 5G eco-friendly phone",
      date: "2025-10-29",
      img: "https://m.media-amazon.com/images/I/61W6nCOZVpL._SL1500_.jpg",
      status: "active",
    },
    {
      id: 114,
      product: "Asus ROG Phone 8",
      oldPrice: "₹80,000",
      newPrice: "₹75,000",
      offer: "",
      description: "Asus ROG Phone 8 gaming monster",
      date: "2025-11-15",
      img: "https://m.media-amazon.com/images/I/61ZqHf+kyGL._SL1500_.jpg",
      status: "inactive",
    },
    {
      id: 115,
      product: "Tecno Phantom X3",
      oldPrice: "₹34,999",
      newPrice: "₹31,999",
      offer: "8% Off",
      description: "Tecno Phantom X3 flagship design",
      date: "2025-10-25",
      img: "https://m.media-amazon.com/images/I/71kVwBEmcXL._SL1500_.jpg",
      status: "active",
    },
  ]);

  const itemsPerPage = 10;
  const data = products;
  const dataToShow = filteredData.length ? filteredData : data;

  const totalPages = Math.ceil(dataToShow.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = dataToShow.slice(indexOfFirst, indexOfLast);

  const totalEntries = dataToShow.length;
  const startEntry = totalEntries === 0 ? 0 : indexOfFirst + 1;
  const endEntry = Math.min(indexOfLast, totalEntries);

  const handleSetStatus = (id, newStatus) => {
    const updated = products.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setProducts(updated);
  };

  const handleFilter = () => {
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      const searchMatch = item.product
        .toLowerCase()
        .includes(search.toLowerCase());
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

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goToPage = (n) => setCurrentPage(n);

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
                    <label>Search</label>
                    <input
                      type="text"
                      placeholder="Search Product..."
                      className="form-control-search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  <div className="search-area-box">
                    <label>Start Date</label>
                    <input
                      type="date"
                      className="form-control-search"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div className="search-area-box">
                    <label>End Date</label>
                    <input
                      type="date"
                      className="form-control-search"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
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
            <div className="table-wrapper table-responsive">
              <table className="sale-table">
                <thead className="table-bg-wrapper">
                  <tr>
                    <th>S.NO</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th> Product Image</th>
                    <th>Old Price</th>
                    <th>New Price</th>
                    <th>Offer</th>
                    <th>Description</th>
                    <th> Product Add Date </th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.length ? (
                    currentItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>{indexOfFirst + index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.product || NA}</td>

                        <td>
                          <img
                            src={item.img}
                            alt={item.product}
                            style={{
                              width: "55px",
                              height: "55px",
                              borderRadius: "6px",
                              border: "1px solid #ddd",
                            }}
                          />
                        </td>

                        <td>{item.oldPrice || NA}</td>
                        <td>{item.newPrice || NA}</td>
                        <td>{item.offer || NA}</td>
                        <td>
                          {item.description
                            ? item.description.split(" ").slice(0, 4).join(" ") + (item.description.split(" ").length > 6 ? "..." : "")
                            : NA}
                        </td>
                        <td>{item.date || NA}</td>
                        <td>
                          <span
                            className={`status-text ${item.status === "active" ? "active" : "inactive"
                              }`}
                          >
                            {item.status === "active" ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td>
                          <ToggleSwitch
                            status={item.status}
                            onToggle={() =>
                              handleSetStatus(
                                item.id,
                                item.status === "active" ? "inactive" : "active"
                              )
                            }
                          />

                          <button className="action-btn edit-btn">
                            <FiEdit />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="12" style={{ textAlign: "center" }}>
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

export default ProductView;
