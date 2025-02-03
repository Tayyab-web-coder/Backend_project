import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv/config.js";
export const Connection = async () => {
    try {
        console.log(process.env.MONGODB_URL, DB_NAME);

        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log('database Connected');

    } catch (error) {
        console.log('Error Come from db Connection', error);

    }
}