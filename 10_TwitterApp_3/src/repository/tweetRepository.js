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
