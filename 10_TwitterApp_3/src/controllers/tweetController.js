import {
  createTweetService,
  getTweets as getTweetsService,
  getTweetById as getTweetByIdService,
  deleteTweet as deleteTweetService,
  updateTweet as updateTweetService,
} from "../services/tweetService.js";

// export const getV1Tweet = (req, res) => {
//   return res.json({
//     message: "V1 tweets router",
//   });
// };

// export const getV1TweetById = (req, res) => {
//   return res.json({
//     message: "V1 tweets router with ID",
//     id: req.params.id,
//   });
// };

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

// FETCHED ALL TWEETS................

// STEP2:- Yaha getTweets Service Layer ko controllers me call krr raha hu....
// STEP3:- Register in Routes...
// STEP2:- Here, Service Layer call here...
export const getTweets = async (req, res) => {
  try {
    const response = await getTweetsService();

    return res.status(200).json({
      success: true,
      data: response,
      message: "Tweets Fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// Tweet FETCHED BY ID.......
// STEP2:- HERE..................
// STEP3:- In ManualTweetValidator
export const getTweetById = async (req, res) => {
  try {
    const response = await getTweetByIdService(req.params.id);

    return res.status(200).json({
      success: true,
      data: response,
      message: "Tweet Fetched Successfully",
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

// DELETE TWEET ................
// STEP3:- Here.....
// STEP4:- In Validator..........
export const deleteTweet = async (req, res) => {
  try {
    const response = await deleteTweetService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully deleted the tweet",
      data: response,
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
      message: "Something went wrong",
      success: false,
    });
  }
};

// UPDATE TWEET.............
export const updateTweet = async (req, res) => {
  try {
    const response = await updateTweetService(req.params.id, req.body.body);

    return res.status(200).json({
      success: true,
      message: "Successfully Updated the Tweet",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.status,
        success: false,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
