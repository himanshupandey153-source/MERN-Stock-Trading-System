import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav style={{ background: "#222", padding: "15px" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/login" style={{ color: "white", marginRight: "20px" }}>
        Login
      </Link>

      <Link to="/register" style={{ color: "white", marginRight: "20px" }}>
        Register
      </Link>

      <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
        Cart
      </Link>

      <Link to="/portfolio" style={{ color: "white", marginRight: "20px" }}>
        Portfolio
      </Link>

      <button
        onClick={handleLogout}
        style={{
          marginLeft: "20px",
          padding: "6px 10px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;