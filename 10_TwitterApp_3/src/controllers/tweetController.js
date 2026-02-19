import { success } from "zod";
import { createTweetService } from "../services/tweetService.js";

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

export const createTweet = async (req, res) => {
  // return res.status(201).json({
  //   message: "Tweet Created",
  //   success: true,
  //   body: req.body,
  // });

  // REGISTER SERVICE LAYER (creteTweetService) Function Here....
  try {
    const response = await createTweetService({
      body: req.body.body,
    });

    // agar tweet sahi se create ho gaya....
    return res.status(201).json({
      success: true,
      data: response,
      message: "Tweet Created Successfully",
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
      message: "Internal Server error",
      success: false,
    });
  }
};
