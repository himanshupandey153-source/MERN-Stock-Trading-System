import React, { useEffect, useState } from "react";
import { getPortfolio, sellStock } from "../services/api";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data } = await getPortfolio(userId);
      setPortfolio(data);
    } catch (err) {
      console.error("Error fetching portfolio:", err);
    }
  };

  const handleSell = async (stock) => {
    try {
      await sellStock({
        userId,
        stock: stock.stock,
        quantity: 1,
      });

      fetchPortfolio(); // refresh after selling
    } catch (err) {
      console.error("Sell error:", err);
    }
  };

  // totals
  const totalStocks = portfolio.length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>

      <h3>Total Stocks: {totalStocks}</h3>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {portfolio.map((stock, index) => {
          const price = stock.price || 100; // fallback dummy price
          const avg = stock.avgPrice || 90;

          const totalValue = price * stock.quantity;
          const profitLoss = (price - avg) * stock.quantity;

          return (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                padding: "20px",
                margin: "10px",
                width: "260px",
                background: "#fff",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h2>{stock.stock}</h2>
              <p>Quantity: {stock.quantity}</p>

              <p>Buy Price: ₹{avg}</p>
              <p>Current Price: ₹{price}</p>
              <p>Total Value: ₹{totalValue}</p>

              <p style={{ color: profitLoss >= 0 ? "green" : "red" }}>
                Profit/Loss: ₹{profitLoss}
              </p>

              <button
                onClick={() => handleSell(stock)}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Sell 1
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;