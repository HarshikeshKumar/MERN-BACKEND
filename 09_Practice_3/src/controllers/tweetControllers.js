import { createTweetServise } from "../services/tweetService.js";

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

export const v1CreateTweet = async (req, res) => {
  // return res.status(201).json({
  //   message: "V1 Tweet Created",
  //   body: req.body,
  // });

  // REGISTER SERVICE LAYER HERE..
  try {
    const response = await createTweetServise({
      body: req.body.body,
    });

    // Agar tweet create ho gaya hai toh...........
    return res.status(201).json({
      success: true,
      data: response,
      message: "Tweet Create Successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
