import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  stock: String,
  quantity: Number
});

export default mongoose.model("Portfolio", portfolioSchema);