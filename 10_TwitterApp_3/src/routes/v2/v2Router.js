import express from "express";
import v2TweetRouter from "./v2TweetRouter.js";
import v2CommentRouter from "./v2CommentRouter.js";

const router = express.Router();

router.use("/tweets", v2TweetRouter);
router.use("/comments", v2CommentRouter);

export default router;
