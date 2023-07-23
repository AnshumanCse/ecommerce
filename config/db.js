import mongoose from "mongoose";
// import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`DataBase connected succesfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
