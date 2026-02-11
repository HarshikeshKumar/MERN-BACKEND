import express from "express";
import {
  createV1Tweet,
  getV1Tweet,
  getV1TweetById,
} from "../../controllers/tweetControllers.js";
import { validate } from "../../validators/manualTweetValidator.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

router.post("/", validate, createV1Tweet);

export default router;
