import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav
      style={{
        background: "#1f2937",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/portfolio">Portfolio</Link>
      </div>

      <div>
        {!userId ? (
          <>
            <Link style={linkStyle} to="/login">Login</Link>
            <Link style={linkStyle} to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={logoutBtn}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none",
  fontWeight: "500",
};

const logoutBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Navbar;