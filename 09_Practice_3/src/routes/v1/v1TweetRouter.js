import express from "express";
import {
  getV1Tweet,
  getV1TweetById,
  v1CreateTweet,
} from "../../controllers/tweetControllers.js";
import { manualTweetValidator } from "../../validators/manualTweetValidator.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

router.post("/", manualTweetValidator, v1CreateTweet);

export default router;
