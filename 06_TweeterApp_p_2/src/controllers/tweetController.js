export const getTweet = (req, res) => {
  return res.json({
    message: "V1 Tweet route",
  });
};

export const getTweetById = (req, res) => {
  return res.json({
    message: "v1 tweet route with ID",
    id: req.params.id,
  });
};

export const v2getTweet = (req, res) => {
  return res.json({
    message: "V2 tweet route",
  });
};

export const v2GetTweetById = (req, res) => {
  return res.json({
    message: "V2 tweet route",
    id: req.params.id,
  });
};

export const createTweet = (req, res) => {
  return res.json({
    message: "V1 tweet created",
    body: req.body,
  });
};
