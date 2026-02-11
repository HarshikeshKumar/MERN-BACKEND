export const v1GetComment = (req, res) => {
  return res.json({
    message: "V1 comments routes",
  });
};

export const v1GetCommentById = (req, res) => {
  return res.json({
    message: "V1 comments route with ID",
    id: req.params.id,
  });
};
