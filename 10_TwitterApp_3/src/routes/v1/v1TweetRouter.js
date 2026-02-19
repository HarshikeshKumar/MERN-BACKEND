import express from "express";
import {
  getV1Tweet,
  getV1TweetById,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

export default router;
