import express from "express";
import {
  createTweet,
  getV1Tweet,
  getV1TweetById,
} from "../../controllers/tweetController.js";
import { tweetZodValidator } from "../../validators/tweetZodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

router.post("/", tweetZodValidator(tweetZodSchema), createTweet);

export default router;
