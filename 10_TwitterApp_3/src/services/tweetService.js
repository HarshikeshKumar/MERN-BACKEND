import { Filter } from "bad-words";
import {
  createTweetRepository,
  getAllTweet as getAllTweetRepository,
  getTweet as getTweetRepository,
  deleteTweet as deleteTweetRepository,
  updateTweet as updateTweetRepository,
} from "../repository/tweetRepository.js";

export const createTweetService = async ({ body }) => {
  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));

    throw {
      message: "Tweet contind Blocked-Words",
      status: 400,
    };
  }

  const tweet = await createTweetRepository({ body });
  return tweet;
};

// STEP1:- getAllTweet Repository function call in Service...
// STEP2:- Iss (getTweets) Service Layer ko controllers me call krenge...
// STEP3:- Routes me Register krenge......

// STEP1:- Here...call repository.......
export const getTweets = async () => {
  const tweets = await getAllTweetRepository();
  return tweets;
};

// FETCH (READ) ONE TWEET...........
// STEP1:- Here.........
export const getTweetById = async (id) => {
  const tweet = await getTweetRepository(id);
  return tweet;
};
// STEP2:- In Controllers
// STEP3:- In tweetManualValidator
// STEP4:- In Routes

// DELETE TWEET...............
// STEP2:- Here..............
// STEP3:- In Controller....
export const deleteTweet = async (id) => {
  const response = await deleteTweetRepository(id);

  if (!response) {
    throw {
      message: "Tweet Not Found",
      status: 404,
    };
  }

  return response;
};

// UPDATE TWEET............
export const updateTweet = async (id, body) => {
  const response = await updateTweetRepository(id, body);

  if (!response) {
    throw {
      message: "Tweet Not Found",
      status: 404,
    };
  }

  return response;
};
