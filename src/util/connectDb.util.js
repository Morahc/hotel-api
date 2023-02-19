import mongoose from 'mongoose'

const connectDb = async () => {
  const MONGO_URI = 'mongodb+srv://morahc:coldkill@cluster0.bbiy2.mongodb.net/hotel?retryWrites=true&w=majority'
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGO_URI)
    console.log('Database connected')
  } catch (error) {
    process.exit(1);
  }
}

export default connectDb