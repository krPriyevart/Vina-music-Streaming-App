import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
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

const allowedOrigins = [
    'http://127.0.0.1:5500', 
    'https://social-app-frontend-tan.vercel.app', 
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

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
