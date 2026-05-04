import React, { useEffect, useState } from "react";
import { getPortfolio, sellStock } from "../services/api";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  const fetchPortfolio = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const res = await getPortfolio(userId);
      setPortfolio(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const handleSell = async (symbol) => {
    try {
      const userId = localStorage.getItem("userId");

      await sellStock({
        userId,
        stock: symbol,
        quantity: 1,
      });

      alert("Stock Sold");
      fetchPortfolio();
    } catch (error) {
      alert("Sell failed");
    }
  };

  const totalInvestment = portfolio.reduce((acc, item) => {
    return acc + (item.price || 0) * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>

      <h3>Total Stocks: {portfolio.length}</h3>
      <h3>Total Investment: ₹{totalInvestment}</h3>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {portfolio.map((stock, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px",
              width: "250px",
              background: "#f9f9f9",
            }}
          >
            <h2>{stock.stock}</h2>
            <p>Quantity: {stock.quantity}</p>

            <button
              onClick={() => handleSell(stock.stock)}
              style={{
                marginTop: "10px",
                padding: "8px",
                background: "white",
                color: "black",
                border: "none",
                cursor: "pointer",
              }}
            ><p>Current Price: ₹{stock.price || 0}</p>

<p>
  Total Value: ₹{(stock.price || 0) * stock.quantity}
</p>

<p
  style={{
    color:
      (stock.price || 0) >= (stock.avgPrice || 0)
        ? "red"
        : "red",
  }}
>
  Profit/Loss: ₹
  {((stock.price || 0) - (stock.avgPrice || 0)) *
    stock.quantity}
</p>
              Sell 1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;