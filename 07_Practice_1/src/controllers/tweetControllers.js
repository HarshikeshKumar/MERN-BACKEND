export const getV1Tweet = (req, res) => {
  return res.json({
    message: "V1 tweet route",
  });
};

export const getV1TweetById = (req, res) => {
  return res.json({
    message: "V1 tweet route with ID",
    id: req.params.id,
  });
};

export const getV2Tweet = (req, res) => {
  return res.json({
    message: "V2 tweet route",
  });
};

export const getV2TweetById = (req, res) => {
  return res.json({
    message: "V2 tweet route with ID",
    id: req.params.id,
  });
};

export const createV1Tweet = (req, res) => {
  return res.json({
    message: "V1 tweet Successfully created",
  });
};
