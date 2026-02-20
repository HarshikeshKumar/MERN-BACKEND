import mongoose from "mongoose";

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

// TWEET FETCHED BY ID (2,3,4,44,) Id ke liye ........
// STEP3:- Here................
// STEP4:- IN ROUTER........

// STEP4:- Here...(DELETE TWEET) Ke liye v yahi Same....
// UPDATE wala me bhi same Validators...
export const getTweetByIdManualValidator = (req, res, next) => {
  const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValidId) {
    return res.status(400).json({
      success: false,
      message: "Invalid tweet id",
    });
  }
  next();
};
