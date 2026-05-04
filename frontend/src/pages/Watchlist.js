import React, { useEffect, useState } from "react";

function Watchlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setItems(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Watchlist</h1>

      {items.map((stock, index) => (
        <div key={index}>
          <h3>{stock.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;