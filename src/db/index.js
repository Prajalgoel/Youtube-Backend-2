import mongoose from "mongoose"
import { db_name } from "../constants.js"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${db_name}`)
        console.log("db host: ", conn.connection.host);
        
    } catch (error) {
        console.log("connection error", error);
        process.exit(1)
    }
}