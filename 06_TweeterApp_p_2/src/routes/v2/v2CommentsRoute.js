import express from "express";
import {
  v2GetComment,
  v2GetCommentsById,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", v2GetComment);

router.get("/:id", v2GetCommentsById);

export default router;
