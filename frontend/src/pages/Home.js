import React, { useEffect, useState } from "react";
import { getStocks } from "../services/api";

function Home() {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {

    const fetchStocks = async () => {
      const { data } = await getStocks();
      setStocks(data);
    };

    fetchStocks();

  }, []);

  return (
    <div>

      <h1>Stock Market</h1>

      {stocks.map((stock) => (

        <div
          key={stock._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            width: "250px"
          }}
        >

          <h3>{stock.symbol} - {stock.name}</h3>

          <p>Price: ${stock.price}</p>

          <p>Change: {stock.change}%</p>

          <p>Volume: {stock.volume}</p>

          <button>Buy</button>

        </div>

      ))}

    </div>
  );
}

export default Home;