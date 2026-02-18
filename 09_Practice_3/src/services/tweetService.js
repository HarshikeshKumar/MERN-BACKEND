import { Filter } from "bad-words";
import { createTweet } from "../repository/tweetRepository.js";

export const createTweetServise = async ({ body }) => {
  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    throw {
      message: "Tweet contains Blocked-Words",
      status: 400,
    };
  }

  const tweet = await createTweet({ body });
  return tweet;
};
