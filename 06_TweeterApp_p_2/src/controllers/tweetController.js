import { createTweetService } from "../services/tweetService.js";

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

export const createTweet = async (req, res) => {
  // return res.json({
  //   message: "V1 tweet created",
  //   body: req.body,
  // });

  // REGISTER SERVICE LAYER HERE...............
  try {
    const response = await createTweetService({
      body: req.body.body,
    });

    // agar tweet sahi se create ho gaya
    return res.status(201).json({
      success: true,
      data: response,
      message: "Tweet created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
      success: false,
    });
  }
};
