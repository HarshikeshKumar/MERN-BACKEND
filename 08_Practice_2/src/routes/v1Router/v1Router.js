import express from "express";

import tweetRouter from "./tweetRouter.js";
import commentRouter from "./commentRouter.js";
const router = express.Router();

router.use("/tweets", tweetRouter);
router.use("/comments", commentRouter);

export default router;
