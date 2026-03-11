import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  stock: String,
  type: String,
  quantity: Number,
  price: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Transaction", transactionSchema);