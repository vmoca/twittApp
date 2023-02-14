'use strict';

const mongoose = require('mongoose');

// Ads Schema definition
const tweetSchema = new mongoose.Schema(
    {
      content: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 140
      },
      author: {
        type: 'ObjectId',
        ref: 'User',
        required: true
      },
      createdAt: Date,
      replies: [
        {
          type: 'ObjectId',
          ref: 'Tweet',
        }
      ],
      likes: [
        {
          type: 'ObjectId',
          ref: 'User',
        }
      ],
      retweets: [
        {
          type: 'ObjectId',
          ref: 'User',
        }
      ],
    },
    { timestamps: true }
  )


// Model creation
const Tweet = mongoose.model('Tweet', tweetSchema);

// Export module
module.exports = Tweet;