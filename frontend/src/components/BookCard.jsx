import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">
      <img
        src={book.imageUrl || "https://via.placeholder.com/400x220?text=Book"}
        alt={book.title}
        className="card-image"
      />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      {/* TODO: Display Description and Genre here */}

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-book/${book._id}`}>Edit</Link>
        <button className="btn danger" onClick={()=> onDelete(book._id)}>Delete</button>
        {/* TODO: Add Delete Button here */}
      </div>
    </div>
  );
}

export default BookCard;
