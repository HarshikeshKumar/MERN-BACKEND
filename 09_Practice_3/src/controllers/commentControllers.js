export const getV1comments = (req, res) => {
  return res.json({
    message: "V1 comments router",
  });
};

export const getV1CommentsById = (req, res) => {
  return res.json({
    message: "V1 comments router with ID",
    id: req.params.id,
  });
};

export const getV2Comments = (req, res) => {
  return res.json({
    message: "V2 comments router",
  });
};

export const getV2CommentsById = (req, res) => {
  return res.json({
    message: "V2 comments router with ID",
    id: req.params.id,
  });
};
