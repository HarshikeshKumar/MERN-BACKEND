export const getV1Comment = (req, res) => {
  return res.json({
    message: "V1 comments router",
  });
};

export const getV1CommentById = (req, res) => {
  return res.json({
    message: "V1 comments router with ID",
    id: req.params.id,
  });
};

export const getV2Comment = (req, res) => {
  return res.json({
    message: "V2 comments router",
  });
};

export const getV2CommentById = (req, res) => {
  return res.json({
    message: "V2 comments router with ID",
    id: req.params.id,
  });
};
