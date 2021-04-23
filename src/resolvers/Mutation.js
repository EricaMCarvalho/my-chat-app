const User = require('../models/User');
const Channel = require('../models/Channel');
const Message = require('../models/Message');

module.exports = {
  createUser(parent, { googleId }, ctx, info) {
    const user = new User({ googleId });
    user.save();
    return user;
  },
  createChannel(parent, { data }, ctx, info) {
    const admin = User.findById(data.admin);
    if (!admin) {
      throw new Error('User not found');
    }
    const channel = new Channel({ ...data });
    channel.save();
    return channel;
  },
  createMessage(parent, { data }, ctx, info) {
    const author = User.findById(data.author);
    if (!author) {
      throw new Error('User not found');
    }
    const channel = Channel.find(data.channel);
    if (!channel) {
      throw new Error('Channel not found');
    }
    const message = new Message({ ...data });
    message.save();
    return message;
  },
  deleteChannel(parent, { _id }, ctx, info) {
    const channel = Channel.findById(_id);
    if (!channel) {
      throw new Error('Channel not found');
    }
    Channel.findByIdAndDelete(_id);
    return channel;
  },
  deleteMessage(parent, { _id }, ctx, info) {
    const message = Message.findById(_id);
    if (!message) {
      throw new Error('Message not found');
    }
    Message.findByIdAndDelete({ _id });
    return message;
  },
};
