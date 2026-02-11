import express from "express";
import v1TweetRouter from "./v1TweetRouter.js";

const router = express.Router();

router.use("/tweets", v1TweetRouter);

export default router;
