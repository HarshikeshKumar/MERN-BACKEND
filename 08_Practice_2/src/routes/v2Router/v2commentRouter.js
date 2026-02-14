import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V2 comments route",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V2 commenyts route with ID",
    id: req.params.id,
  });
});
export default router;
