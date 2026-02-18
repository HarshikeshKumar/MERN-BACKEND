import express from "express";
import {
  getV1Tweet,
  getV1TweetById,
  v1CreateTweet,
} from "../../controllers/tweetControllers.js";
import { zodValidators } from "../../validators/tweetZodValidators.js";
import { tweetZodSchema } from "../../validators/zodSchema.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

router.post("/", zodValidators(tweetZodSchema), v1CreateTweet);

export default router;
