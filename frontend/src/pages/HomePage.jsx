import { useEffect, useState } from "react";
import { getBooks, createBook, deleteBook } from "../api/bookApi.js";
import BookCard from "../components/BookCard.jsx";
import BookForm from "../components/BookForm.jsx";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const { data } = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (bookData) => {
    try {
      const { data } = await createBook(bookData);
      setBooks([...books, data]);
    } catch (error) {
      console.error("Failed to add book", error);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await deleteBook(bookId);
      setBooks(books.filter(book => book._id !== bookId));
    } catch (error) {
      console.error("Failed to delete book", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Book Details</h1>
        <p>View, manage, edit, and remove books from the library.</p>
      </div>

      <BookForm onSubmit={addBook} submitText="Add Book" />

      {loading ? (
        <p>Loading books...</p>
      ) : books.length === 0 ? (
        <p>No books available. Add a new book from the menu.</p>
      ) : (
        <div className="grid">
          {books.map((book) => (
            <BookCard key={book._id} book={book} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
