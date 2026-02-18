import express from "express";
import {
  getV2Comments,
  getV2CommentsById,
} from "../../controllers/commentControllers.js";

const router = express.Router();

router.get("/", getV2Comments);

router.get("/:id", getV2CommentsById);

export default router;
