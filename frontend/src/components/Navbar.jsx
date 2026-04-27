import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Book Manager</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
