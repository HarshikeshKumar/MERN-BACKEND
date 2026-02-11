export const getV1Comment = (req, res) => {
  return res.json({
    message: "V1 comments route",
  });
};

export const getV1CommentById = (req, res) => {
  return res.json({
    message: "V2 comments route with ID",
    id: req.params.id,
  });
};

export const getV2Comment = (req, res) => {
  return res.json({
    message: "V2 comments route",
  });
};

export const getV2CommentById = (req, res) => {
  return res.json({
    message: "V2 comment route with ID",
    id: req.params.id,
  });
};
