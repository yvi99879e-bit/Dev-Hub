import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  return (

    <nav className="navbar">

      <div className="logo">

        <span>💻</span>

        <h2>Dev Hub</h2>

      </div>

      <ul className="nav-links">

        <li>

          <Link
            className={location.pathname==="/" ? "active" : ""}
            to="/"
          >
            Home
          </Link>

        </li>

        <li>

          <Link
            className={location.pathname==="/about" ? "active" : ""}
            to="/about"
          >
            About
          </Link>

        </li>

        <li>

          <Link
            className={location.pathname==="/add" ? "active" : ""}
            to="/add"
          >
            Write Blog
          </Link>

        </li>

        <li>

          <Link
            className={location.pathname==="/contact" ? "active" : ""}
            to="/contact"
          >
            Contact
          </Link>

        </li>

      </ul>

    </nav>

  );

}

export default Navbar;