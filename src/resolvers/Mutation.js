const User = require('../models/User');
const Channel = require('../models/Channel');
const Message = require('../models/Message');

module.exports = {
  createUser(parent, args, ctx, info) {
    const user = new User({ ...args });
    user.save();
    return user;
  },
  createChannel(parent, { data }, ctx, info) {
    const channel = new Channel({ ...data });
    channel.save();
    return channel;
  },
  createMessage(parent, { data }, ctx, info) {
    const message = new Message({ ...data });
    message.save();
    return message;
  },
  deleteChannel(parent, { _id }, ctx, info) {
    const res = Channel.findByIdAndDelete(_id);
    return _id;
  },
  deleteMessage(parent, { _id }, ctx, info) {
    Message.findByIdAndDelete(_id);
    return _id;
  },
};
