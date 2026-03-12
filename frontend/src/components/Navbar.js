import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{background: "#222", padding: "15px"}}>
      <Link to="/" style={{color:"white", marginRight:"20px"}}>Home</Link>
      <Link to="/login" style={{color:"white", marginRight:"20px"}}>Login</Link>
      <Link to="/register" style={{color:"white", marginRight:"20px"}}>Register</Link>
      <Link to="/cart" style={{color:"white",  marginRight:"20px"}}>Cart</Link>
      <Link to="/portfolio" style={{color:"white"}}>Portfolio</Link>
    </nav>
  );
}

export default Navbar;