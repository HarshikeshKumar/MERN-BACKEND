export const createManualTweetValidator = (req, res, next) => {
  if (!req.body.tweet) {
    return res.status(400).json({
      //400 --> Bad Request
      error: "Tweet is required",
    });
  }
  next();
};
