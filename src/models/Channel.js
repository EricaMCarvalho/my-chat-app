const mongoose = require('mongoose');
const Message = require('./Message');

const ChannelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  public: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

ChannelSchema.post('findOneAndDelete', async function () {
  await Message.deleteMany({ channel: this._id });
});

module.exports = mongoose.model('Channel', ChannelSchema);
