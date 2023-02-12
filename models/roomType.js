import mongoose from 'mongoose';

const roomTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field is required'],
  }
});

const RoomType = mongoose.model('RoomType', roomTypeSchema);

export default RoomType;
