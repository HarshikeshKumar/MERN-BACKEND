import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V2 tweets route",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V2 tweets route with id",
    id: req.params.id,
  });
});

export default router;
