import express from "express";
import {
  v2getTweet,
  v2GetTweetById,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", v2getTweet);

router.get("/:id", v2GetTweetById);

export default router;
