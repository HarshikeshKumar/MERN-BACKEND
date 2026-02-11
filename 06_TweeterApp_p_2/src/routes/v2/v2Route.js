import express from "express";
import v2TweerRouter from "./v2TweetsRoute.js";
import v2CommentRouter from "./v2CommentsRoute.js";

const router = express.Router();

router.use("/tweets", v2TweerRouter);
router.use("/comments", v2CommentRouter);

export default router;
