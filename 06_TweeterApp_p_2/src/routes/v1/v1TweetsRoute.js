import express from "express";
import {
  createTweet,
  getTweet,
  getTweetById,
} from "../../controllers/tweetController.js";
import { createManualTweetValidator } from "../../valodators/tweetManualValidator.js";

const router = express.Router();

router.get("/", getTweet);

router.get("/:id", getTweetById);

router.post("/", createManualTweetValidator, createTweet);

export default router;
