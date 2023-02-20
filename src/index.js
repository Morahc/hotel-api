import express from 'express';
import connectDb from './util/connectDb.util.js';
import room from './routes/room.route.js';
import roomType from './routes/roomTypes.route.js';
import user from './routes/user.route.js';

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/rooms', room);
app.use('/api/v1/rooms-types', roomType);
app.use('/api/v1/auth', user);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    message: errorMessage,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
