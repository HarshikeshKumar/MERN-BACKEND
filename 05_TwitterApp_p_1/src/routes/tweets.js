import express, { json } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the tweets route",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "Tweet router with ID",
    id: req.params.id,
  });
});

export default router;
