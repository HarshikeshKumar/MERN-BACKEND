export const manualTweetValidator = (req, res, next) => {
  if (!req.body.tweet) {
    return res.status(400).json({
      message: "Tweet is required",
      success: false,
    });
  }

  if (req.body.tweet.length >= 280) {
    return res.status(400).json({
      message: "Tweets should be 280 cgaracters or less",
      success: false,
    });
  }
  next();
};
