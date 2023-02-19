import { Schema, model } from 'mongoose';

const roomSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  roomType: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType',
    required: [true, 'RoomType field is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price field is required'],
  },
});

const Room = model('Room', roomSchema);

export default Room;
