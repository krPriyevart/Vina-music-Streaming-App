import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import authRoutes from "./auth/auth.js";
import songRoutes from "./auth/song.js";
import playlistRoutes from "./auth/playlist.js";
import passport from 'passport';
import './passportConfig.js';

const app = express();
app.use(express.json());
app.use(passport.initialize());
dotenv.config({
    path:'./env'
})

// Database connection
// mongoose.connect(`${process.env.URI}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error", error);
        throw error;
    }); 
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port : ${process.env.PORT}`); 
    })
})
.catch((err) =>{
    console.log("MONGODB connection failed!!", err);
})
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);
