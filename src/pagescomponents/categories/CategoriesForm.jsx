import React, { useState } from "react";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [parent, setParent] = useState("none");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const parentCategories = [
    { id: "none", name: "None" },
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "grocery", name: "Grocery" }
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("description", description);
    formData.append("parent", parent);
    formData.append("image", image);

    alert("Category Created Successfully!");
  };

  return (
    <div className="category-container">
      <h2>Create Product Category</h2>

      <form onSubmit={handleSubmit} className="category-form">

        <div className="form-group">
          <label>Parent Category</label>
          <select
            value={parent}
            onChange={(e) => setParent(e.target.value)}
          >
            {parentCategories.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter category description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Category Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {imagePreview && (
            <div className="preview-box">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">Save Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
