import express from "express";
import {
  getV2Comment,
  getV2CommentById,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", getV2Comment);

router.get("/:id", getV2CommentById);

export default router;
