import express from "express";
import {
  getV2Tweet,
  getV2TweetById,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", getV2Tweet);

router.get("/:id", getV2TweetById);

export default router;
