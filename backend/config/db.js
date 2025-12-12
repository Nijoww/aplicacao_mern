import mongoose from "mongoose";

export async function connectToDatabase(){
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to the datababase");
    } catch(error){
        console.error("Error connecting database...", error);
        process.exit(1);
    }
}