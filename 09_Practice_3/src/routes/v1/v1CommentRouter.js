import express from "express";
import {
  getV1comments,
  getV1CommentsById,
} from "../../controllers/commentControllers.js";

const router = express.Router();

router.get("/", getV1comments);

router.get("/:id", getV1CommentsById);

export default router;
