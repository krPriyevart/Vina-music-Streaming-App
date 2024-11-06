import express from "express";
import passport from "passport";
import Playlist from "../../models/playlist.model.js";
import User from "../../models/user.model.js";

const router = express.Router();

router.post("/create",passport.authenticate("jwt",{session:false}), async(req,res)=>{
    const currentUser = req.user;
    const {name,thumbnail,songs} = req.body;
    
})













export default router;