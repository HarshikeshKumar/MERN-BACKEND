import express from "express";
import v2TweetRouter from "./v2Tweets.js";
import v2CommentRouter from "./v2CommentsRoute.js";

const router = express.Router();

router.use("/tweets", v2TweetRouter);
router.use("/comments", v2CommentRouter);

export default router;
