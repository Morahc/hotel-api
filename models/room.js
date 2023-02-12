import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field is required'],
  },
  roomType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RoomType',
    required: [true, 'This field is required'],
  },
  price: {
    type: Number,
    required: [true, 'This field is required'],
  },
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
