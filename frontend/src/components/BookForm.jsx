import { useState } from "react";

function BookForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      title: "",
      author: "",
      imageUrl: "",
      // TODO: Add description and genre to state
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Book Title</label>
      <input name="title" value={formData.title} onChange={handleChange} required />

      <label>Author</label>
      <input name="author" value={formData.author} onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" value={formData.description} onChange={handleChange} />

      <label>Genre</label>
      <input name="genre" value={formData.genre} onChange={handleChange} />
      {/* TODO: Add input fields for Description and Genre */}

      <label>Image URL</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default BookForm;
