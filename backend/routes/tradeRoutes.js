import express from "express";
import { buyStock, sellStock, getPortfolio } from "../controllers/tradeController.js";

const router = express.Router();

router.post("/buy", buyStock);
router.post("/sell", sellStock);
router.get("/portfolio/:userId", getPortfolio);

export default router;