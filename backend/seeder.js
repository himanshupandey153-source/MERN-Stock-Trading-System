import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import Stock from "./models/Stocks.js";
import stocks from "./data/stocks.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Stock.deleteMany();

    await Stock.insertMany(stocks);

    console.log("Stocks Seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();