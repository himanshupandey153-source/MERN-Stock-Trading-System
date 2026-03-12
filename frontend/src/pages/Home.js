import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            width: "200px"
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            width="150"
          />

          <h3>{product.name}</h3>

          <p>${product.price}</p>

        </div>
      ))}

    </div>
  );
}

export default Home;