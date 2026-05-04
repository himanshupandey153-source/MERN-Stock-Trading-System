import Transaction from "../models/Transaction.js";

export const getPortfolio = async (req, res) => {
  try {
    const userId = req.params.userId;

    const transactions = await Transaction.find({ user: userId });

    const portfolio = {};

    transactions.forEach((tx) => {
      if (tx.type === "BUY") {
        portfolio[tx.stock] =
          (portfolio[tx.stock] || 0) + tx.quantity;
      } else if (tx.type === "SELL") {
        portfolio[tx.stock] =
          (portfolio[tx.stock] || 0) - tx.quantity;
      }
    });

    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};