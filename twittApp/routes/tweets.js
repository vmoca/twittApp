const tweetController = require('../controllers/tweet.js')
const router = require('express').Router()

router.post('/', tweetController.createTweet)

router.get('/', tweetController.getTweets)

router.get('/:tweetId', tweetController.getTweet)

router.patch('/:tweetId/like', tweetController.likeTweet)

module.exports = router