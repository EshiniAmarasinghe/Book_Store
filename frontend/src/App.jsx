import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";
import EditBookPage from "./pages/EditBookPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
