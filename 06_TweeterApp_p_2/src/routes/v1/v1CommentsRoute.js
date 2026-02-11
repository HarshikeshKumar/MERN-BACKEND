import express from "express";
import {
  v1GetComment,
  v1GetCommentById,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", v1GetComment);

router.get("/:id", v1GetCommentById);

export default router;
