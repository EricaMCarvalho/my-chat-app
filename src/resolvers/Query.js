const User = require('../models/User');
const Channel = require('../models/Channel');
const Message = require('../models/Message');

module.exports = {
  user(parent, { googleId }, ctx, info) {
    return User.findOne({ googleId });
  },
  channel(parent, { _id }, ctx, info) {
    return Channel.findById(_id);
  },
  message(parent, { _id }, ctx, info) {
    return Message.findById(_id);
  },
};
