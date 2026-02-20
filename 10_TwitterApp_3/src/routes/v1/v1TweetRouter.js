import express from "express";
import {
  createTweet,
  deleteTweet,
  getTweetById,
  getTweets,
  updateTweet,
  // getV1Tweet,
  // getV1TweetById,
} from "../../controllers/tweetController.js";
import { tweetZodValidator } from "../../validators/tweetZodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";
import { getTweetByIdManualValidator } from "../../validators/manualTweetValidator.js";

const router = express.Router();

// router.get("/", getV1Tweet);
router.get("/", getTweets);

// router.get("/:id", getV1TweetById);
router.get("/:id", getTweetByIdManualValidator, getTweetById);

router.post("/", tweetZodValidator(tweetZodSchema), createTweet);

// STEP5:- Register DELETETWEET Controller Here......
router.delete("/:id", getTweetByIdManualValidator, deleteTweet);

// UPDATE Tweet.......
router.put("/:id", getTweetByIdManualValidator, updateTweet);

export default router;
