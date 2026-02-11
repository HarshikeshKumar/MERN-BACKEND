import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repository/tweetRepository.js";

// Business Logic................................
export const createTweetService = async ({ body }) => {
  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    throw new Error("Tweet contain blocked words");
  }

  const tweet = await createTweetRepository({ body });
  return tweet;
};
