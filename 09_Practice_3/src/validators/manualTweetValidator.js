export const manualTweetValidator = (req, res, next) => {
  if (!req.body.tweet) {
    return res.status(401).json({
      error: "Tweet is retuired",
      success: false,
    });
  }

  if (req.body.tweet.length >= 280) {
    return res.status(400).json({
      error: "Tweet must be 280 character or less",
      success: false,
    });
  }
  next();
};
