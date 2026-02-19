import { Filter } from "bad-words";
import { createTweetRepository } from "../repository/tweetRepository.js";

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
