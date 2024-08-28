import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongodb connected at ${conn.connection.host}`);
  } catch (error) {
    console.log('error in connection', error.message);
    process.exit(1);
  }
};
