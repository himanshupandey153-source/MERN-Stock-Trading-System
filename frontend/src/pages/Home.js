import React, { useEffect, useState } from "react";
import { getStocks, buyStock } from "../services/api";

function Home() {
  const [stocks, setStocks] = useState([]);

  // Fetch stocks from backend
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const { data } = await getStocks();
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  // Handle Buy
  const handleBuy = async (stock) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please login first!");
      return;
    }

    try {
      await buyStock({
        userId,
        stock: stock.symbol,
        quantity: 10,
        price: stock.price,
      });

      alert("Stock purchased successfully!");
    } catch (error) {
      console.error(error);
      alert("Error buying stock");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Stock Market</h1>

      {stocks.map((stock) => (
        <div
          key={stock._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px",
            width: "250px",
          }}
        >
          <h3>
            {stock.symbol} - {stock.name}
          </h3>

          <p>Price: ${stock.price}</p>
          <p>Change: {stock.change}%</p>
          <p>Volume: {stock.volume}</p>

          <button onClick={() => handleBuy(stock)}>Buy</button>
        </div>
      ))}
    </div>
  );
}

export default Home;