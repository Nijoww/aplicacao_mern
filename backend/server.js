import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";

const app = express();
async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to the datababase");
    }catch(error){
        console.error("Error connecting database...", error);
        process.exit(1);
    }
}

app.listen (3000, ()=> {
    console.log("Server is running on port 3000. CTRL + C to stop.")
    connectToDatabase();
});

//mongodb+srv://Nijow:SRJSR5wVG21wJSL0@cluster0.u9niv2q.mongodb.net/?appName=Cluster0
    