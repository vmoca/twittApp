const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
      unique: false
    },
    username: { type: String, unique: true, required: false },
    email: { type: String, required: true, unique: true },
    createdAt: Date,
    profilePicture: String,
    bio: String,
    location: String,
    website: String,
    followers: [
      {
        type: 'ObjectId',
        ref: 'User',
      }
    ],
    following: [
      {
        type: 'ObjectId',
        ref: 'User',
      }
    ],
    tweets: [
      {
        type: 'ObjectId',
        ref: 'Tweet',
      }
    ],
    likedTweets: [
      {
        type: 'ObjectId',
        ref: 'Tweet',
      }
    ]
  },
  { timestamps: true }
)

// userSchema.plugin(passportLocalMongoose, {
//   usernameField: 'email',
//   passwordField: 'password',
//   populateFields: ['name']
// })

// Model creation
const User = mongoose.model('User', userSchema);

// Export module
module.exports = User;