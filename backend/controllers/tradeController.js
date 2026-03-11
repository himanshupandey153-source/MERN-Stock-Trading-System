import Transaction from "../models/Transaction.js";
import Portfolio from "../models/Portfolio.js";

// BUY STOCK
export const buyStock = async (req, res) => {
  const { userId, stock, quantity, price } = req.body;

  const transaction = await Transaction.create({
    user: userId,
    stock,
    type: "BUY",
    quantity,
    price
  });

  let portfolio = await Portfolio.findOne({ user: userId, stock });

  if (portfolio) {
    portfolio.quantity += quantity;
    await portfolio.save();
  } else {
    portfolio = await Portfolio.create({
      user: userId,
      stock,
      quantity
    });
  }

  res.json(transaction);
};

// SELL STOCK
export const sellStock = async (req, res) => {
  const { userId, stock, quantity, price } = req.body;

  const portfolio = await Portfolio.findOne({ user: userId, stock });

  if (!portfolio || portfolio.quantity < quantity) {
    return res.status(400).json({ message: "Not enough stock to sell" });
  }

  portfolio.quantity -= quantity;
  await portfolio.save();

  const transaction = await Transaction.create({
    user: userId,
    stock,
    type: "SELL",
    quantity,
    price
  });

  res.json(transaction);
};

// GET PORTFOLIO
export const getPortfolio = async (req, res) => {
  const { userId } = req.params;

  const portfolio = await Portfolio.find({ user: userId });

  res.json(portfolio);
};