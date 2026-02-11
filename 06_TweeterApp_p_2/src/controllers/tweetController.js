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
