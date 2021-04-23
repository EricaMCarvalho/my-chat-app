const User = require('../models/User');
const Channel = require('../models/Channel');
const Message = require('../models/Message');

module.exports = {
  user(parent, { googleId }, ctx, info) {
    const user = User.findOne({ googleId });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },
  channel(parent, { _id }, ctx, info) {
    const channel = Channel.findById(_id);
    if (!channel) {
      throw new Error('Channel not found');
    }
    return channel;
  },
  message(parent, { _id }, ctx, info) {
    const message = Message.findById(_id);
    if (!message) {
      throw new Error('Message not found');
    }
    return message;
  },
};
