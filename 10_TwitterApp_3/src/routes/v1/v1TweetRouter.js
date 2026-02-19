import express from "express";
import {
  createTweet,
  getV1Tweet,
  getV1TweetById,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

router.post("/", createTweet);

export default router;
