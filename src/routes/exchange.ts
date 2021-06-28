import express from "express";
import rate from "../controller/exchange";
const router = express.Router();

/* GET home page. */

router.get("/api/rates", rate);

export default router;
