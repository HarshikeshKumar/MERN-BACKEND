import Tweet from "../schema/tweetSchema.js";

// Create tweet......
export const createTweetRepository = async ({ body }) => {
  try {
    const tweet = await Tweet.create({ body });
    return tweet;
  } catch (error) {
    throw error;
  }
};

// Read one Tweet.....
export const getTweet = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      throw {
        message: "Tweet Not Found",
        status: 404,
      };
    }

    return tweet;
  } catch (error) {
    throw error;
  }
};

// Read All Tweet.......
export const getAllTweet = async () => {
  try {
    const tweets = await Tweet.find();
    return tweets;
  } catch (error) {
    throw error;
  }
};

// DELETE TWEET................................
// STEP1:- Here...
// STEP2:- In SERVICE..........
export const deleteTweet = async (tweetId) => {
  try {
    const tweet = await Tweet.findByIdAndDelete(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};

// UPDATE TWEET............
export const updateTweet = async (tweetId, body) => {
  try {
    // const tweet = await Tweet.findByIdAndUpdate(tweetId, { body }); //Ye Update hone se pahele wala data dega

    const tweet = await Tweet.findByIdAndUpdate(
      tweetId,
      { body },
      { new: true },
    );

    return tweet;
  } catch (error) {
    throw error;
  }
};
