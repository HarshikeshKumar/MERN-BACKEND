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

export const v2GetComment = (req, res) => {
  return res.json({
    message: "V2 comments routes",
  });
};

export const v2GetCommentsById = (req, res) => {
  return res.json({
    message: "V2 comment route with ID",
    id: req.params.id,
  });
};
