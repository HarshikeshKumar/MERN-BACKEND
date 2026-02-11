import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V1 Comments routes",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 comments routes with ID",
    id: req.params.id,
  });
});

export default router;
