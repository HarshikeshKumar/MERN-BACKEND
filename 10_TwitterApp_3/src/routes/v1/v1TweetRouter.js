import express from "express";
import {
  createTweet,
  getV1Tweet,
  getV1TweetById,
} from "../../controllers/tweetController.js";
import { manualTweetValidator } from "../../validators/manualTweetValidator.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

router.post("/", manualTweetValidator, createTweet);

export default router;
