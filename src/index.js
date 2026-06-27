import "dotenv/config"
import mongoose from "mongoose"
import { connectDB } from "./db/index.js"

connectDB()









/*
import { db_name } from "./constants";
import express from 'express'

const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${db_name}`)

        app.on("error", (error) => {
            console.log("err; ", error);
            
        })

        app.listen(process.env.PORT, () =>{
            console.log('appp is listening on port', process.env.PORT);
            
        })
    } catch (error) {
        console.error("error: ", error)
        throw error
    }
} )()
*/