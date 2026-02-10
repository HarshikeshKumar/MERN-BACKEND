import express, { json } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the V1 tweets route",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 tweets route with ID",
    id: req.params.id,
  });
});

export default router;
