import express from "express";
import v1TweetRouter from "./v1TweetsRoute.js";
import v1CommentRouter from "./v1CommentsRoute.js";

const router = express.Router();

router.use("/tweets", v1TweetRouter);
router.use("/comments", v1CommentRouter);

export default router;
