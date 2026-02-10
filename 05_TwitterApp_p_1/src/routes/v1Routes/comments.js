import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome to comments routes",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "Welcome to the comments route with id",
    id: req.params.id,
  });
});

export default router;
