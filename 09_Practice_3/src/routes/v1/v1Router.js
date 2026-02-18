import express from "express";
import v1TweetRouter from "./v1TweetRouter.js";
import v1CommentRouter from "./v1CommentRouter.js";

const router = express.Router();

router.use("/tweets", v1TweetRouter);
router.use("/comments", v1CommentRouter);

export default router;
