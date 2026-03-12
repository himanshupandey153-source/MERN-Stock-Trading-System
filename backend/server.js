import tradeRoutes from "./routes/tradeRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userroutes.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/trade", tradeRoutes);
app.use("/api/products", productRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("ShopEZ Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});