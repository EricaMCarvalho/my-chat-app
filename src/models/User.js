const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  username: {
    type: String,
    unique: true,
  },
  channels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel',
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
