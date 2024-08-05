import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () =>{
    try {

       const conn = await mongoose.connect(process.env.MONGO_URL); 
       console.log(`Coneeted to MongoDB Local Database ${mongoose.connection.host}`.bgMagenta.white.bold);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
        process.exit(1);
    }
}
export default connectDB;