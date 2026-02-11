import express from "express";
import {
  createV1Tweet,
  getV1Tweet,
  getV1TweetById,
} from "../../controllers/tweetControllers.js";

const router = express.Router();

router.get("/", getV1Tweet);

router.get("/:id", getV1TweetById);

router.post("/", createV1Tweet);

export default router;
