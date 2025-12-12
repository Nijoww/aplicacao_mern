import express from "express";
import "dotenv/config.js";
import { connectToDatabase } from "./config/db.js";
import { Book } from "./book.model.js"

const app = express();

app.use(express.json());

app.post("/api/v1/books", async (req, res)=> {
    const{title, subtitle, author, genre, cover} = req.body;
    try{
        const book = new Book({title, subtitle, author, genre, cover});
        await book.save();
        res.status(201).json({sucess:true, data:book});
    }catch(error){
        console.error("Error saving book", error);
        res.status(500).json({sucess:false, error:"Erro durante cadastro."});
    }
});

app.listen (3000, ()=> {
    console.log("Server is running on port 3000. CTRL + C to stop.")
    connectToDatabase();
});

//mongodb+srv://Nijow:SRJSR5wVG21wJSL0@cluster0.u9niv2q.mongodb.net/?appName=Cluster0
    