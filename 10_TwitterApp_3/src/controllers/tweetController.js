export const getV1Tweet = (req, res) => {
  return res.json({
    message: "V1 tweets router",
  });
};

export const getV1TweetById = (req, res) => {
  return res.json({
    message: "V1 tweets router with ID",
    id: req.params.id,
  });
};

export const getV2Tweet = (req, res) => {
  return res.json({
    message: "V2 tweets router",
  });
};

export const getV2TweetById = (req, res) => {
  return res.json({
    message: "V2 tweets router with ID",
    id: req.params.id,
  });
};

export const createTweet = (req, res) => {
  return res.status(201).json({
    message: "Tweet Created",
    success: true,
    body: req.body,
  });
};
