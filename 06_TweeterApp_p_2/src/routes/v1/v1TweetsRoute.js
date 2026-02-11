import express from "express";
import {
  createTweet,
  getTweet,
  getTweetById,
} from "../../controllers/tweetController.js";

import validate from "../../valodators/tweetZodValidator.js";
import { tweetZodSchema } from "../../valodators/tweetZodSchema.js";

const router = express.Router();

router.get("/", getTweet);

router.get("/:id", getTweetById);

router.post("/", validate(tweetZodSchema), createTweet);

export default router;
