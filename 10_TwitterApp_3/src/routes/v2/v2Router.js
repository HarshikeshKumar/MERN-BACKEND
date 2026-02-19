import express from "express";
import v2TweetRouter from "./v2TweetRouter.js";

const router = express.Router();

router.use("/tweets", v2TweetRouter);

export default router;
