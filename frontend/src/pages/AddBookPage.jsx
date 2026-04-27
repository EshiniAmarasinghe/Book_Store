import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm.jsx";
import { createBook } from "../api/bookApi.js";

function AddBookPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createBook(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create book", error);
      alert("Failed to create book");
    }
  };

  return <BookForm submitText="Add Book" onSubmit={handleCreate} />;
}

export default AddBookPage;
