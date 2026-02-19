import mongoose from "mongoose";
import { string, trim } from "zod";

const tweetSchema = new mongoose.Schema({
  body: {
    type: string,
    required: true,
    trim: true,
    maxlength: 280,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
