import express from "express";
import {
  getV1Comment,
  getV1CommentById,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", getV1Comment);

router.get("/:id", getV1CommentById);

export default router;
