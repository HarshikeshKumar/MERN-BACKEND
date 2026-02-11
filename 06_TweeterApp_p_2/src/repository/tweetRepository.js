import Tweet from "../schema/tweetSchema.js";

// Create a tweet.................
export const createTweet = async ({ body }) => {
  try {
    const tweet = await Tweet.create({ body });
    return tweet;
  } catch (error) {
    throw error;
  }
};

// Get all tweet.................
export const getTweets = async () => {
  try {
    const tweets = await Tweet.find();
    return tweet;
  } catch (error) {
    throw error;
  }
};

// Get tweet by id...............
export const getTweetById = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};
