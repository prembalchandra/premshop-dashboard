import React, { useState, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [offer, setOffer] = useState(""); // New state for Offer
  const [images, setImages] = useState([]);

  const handleMultipleImages = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      price: "",
    }));
    setImages([...images, ...newImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      productName,
      price,
      oldPrice,
      quantity,
      category,
      description,
      offer, // Include offer in formData
      images: images.map((img) => ({ file: img.file, price: img.price })),
    };

    console.log("Form Data:", formData);
    alert("Product saved successfully!");

    // Reset form
    setProductName("");
    setPrice("");
    setOldPrice("");
    setQuantity("");
    setCategory("");
    setDescription("");
    setOffer(""); // reset offer
    images.forEach((img) => URL.revokeObjectURL(img.preview));
    setImages([]);
  };

  useEffect(() => {
    return () => images.forEach((img) => URL.revokeObjectURL(img.preview));
  }, [images]);

  return (
    <div className="add-product-container">
      <div className="dashboard_row">
        <div className="dashboard_iocn">
          <FiPlusCircle />
        </div>
        <h1 className="dashboard_heading">Add New Product</h1>
      </div>

      <div className="card-bg-warrper">
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="product-form_row">
            {/* Product Name */}
            <div className="form-group">
              <label htmlFor="productName" className="search-label">Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                className="form-control-search"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>

            {/* Price */}
            <div className="form-group">
              <label htmlFor="price" className="search-label">Price</label>
              <input
                type="number"
                placeholder="Enter price"
                className="form-control-search"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            {/* Old Price */}
            <div className="form-group">
              <label htmlFor="oldPrice" className="search-label">Old Price</label>
              <input
                type="number"
                placeholder="Enter old price"
                className="form-control-search"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
              />
            </div>

            {/* Offer */}
            <div className="form-group">
              <label htmlFor="offer" className="search-label">Offer (%)</label>
              <input
                type="number"
                placeholder="Enter offer percentage"
                className="form-control-search"
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
              />
            </div>

            {/* Quantity */}
            <div className="form-group">
              <label htmlFor="quantity" className="search-label">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="form-control-search"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category" className="search-label">Category</label>
              <select
                className="form-control-search"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Images */}
            <div className="form-group">
              <label htmlFor="images" className="search-label">Upload Product Images</label>
              <input
                type="file"
                className="form-control-search"
                multiple
                accept="image/*"
                onChange={handleMultipleImages}
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description" className="search-label">Description</label>
              <textarea
                rows="3"
                placeholder="Enter description"
                className="form-control-search"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">Save Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;  