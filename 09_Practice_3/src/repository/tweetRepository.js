import Tweet from "../schema/tweetSchema.js";
// Create Tweet.........
export const createTweet = async ({ body }) => {
  try {
    const tweet = await Tweet.create({ body });
    return tweet;
  } catch (error) {
    throw error;
  }
};

// Get All Tweet............
export const getAllTweet = async () => {
  try {
    const tweets = await Tweet.find();
    return tweets;
  } catch (error) {
    throw error;
  }
};

// Get a Tweet.................
export const getTweetById = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};
