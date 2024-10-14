import mongoose from "mongoose"

export const connectDB = async () =>{


    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected: ${conn.connection.host}`);
    
    } catch (error) {
        console.log(error.message);
        process.exit(1); // 1 code a failure, 0 means success
    }
}