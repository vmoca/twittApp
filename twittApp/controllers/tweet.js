const Tweet = require('../models/tweet')

exports.createTweet = async (req, res, next) => {
  const tweetRequest = {
    content: req.body.content,
    author: req.body.user
  }

  let newTweet = new Tweet(tweetRequest)


  try {
    newTweet.save()

    res.status(201).send(newTweet)
  } catch (error) {
    return next(error)
  }
}

exports.getTweets = async (req, res, next) => {
  try {
    Tweet
    .find({})
    .exec( (err, tweets) => {
      if (err) { return res.status(500).json(err); }

      return res.status(200).json(tweets);
    });
  } catch (error) {
    return next(error)
  }
}

exports.getTweet = async (req, res, next) => {
  Tweet
    .findById(req.params.id)
    .exec( (err, thread) => {
      if (err)     { return res.status(500).json(err); }
      if (!thread) { return res.status(404).json(err); }

      return res.status(200).json(thread);
    });
};

exports.likeTweet = async (req, res, next) => {
  try {
    const tweet = await this.find(req.params.tweetId)
    tweet.likes.push(req.user._id)
    await tweet.save()
    res.status(200).send(tweet)
  } catch (error) {
    return next(error)
  }
}
