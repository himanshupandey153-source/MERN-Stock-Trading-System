import Stock from "../models/Stocks.js";

// GET all stocks
export const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find({});
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};