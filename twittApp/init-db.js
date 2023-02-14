// Loading libraries
const readline = require('readline');
const mongoose = require('mongoose');
// Loading models
const Tweet = require('./models/Tweet');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1/tweets', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const userData = [
    {
        name: 'Vanesa',
        username: 'Vanesa',
        email: 'vanesa@vanesa.es',
    },
];

const tweetData = [
    {
        content: 'Hello world!',
        author: 'Vanesa', 
    },
    {
        content: 'This is a test tweet.',
        author: 'Vanesa', 
    },
];

User.insertMany(userData, function (error, savedUsers) {
    if (error) {
        console.error(error);
        mongoose.connection.close();
    }

    console.log('Saved users to database');

    const modifiedTweetData = tweetData.map((tweet) => {
        const author = savedUsers.find(
            (user) => user.username === tweet.author
        );
        return { content: tweet.content, author: author._id };
    });

    // Save tweets to database
    Tweet.insertMany(modifiedTweetData, function (error, savedTweets) {
        if (error) {
            console.error(error);
        }

        console.log('Saved tweets to database');
        mongoose.connection.close();
    });
});
