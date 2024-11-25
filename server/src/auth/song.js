import express from "express";
import passport from "passport";
import Song from "../../models/song.model.js";
import User from "../../models/user.model.js";

const router = express.Router();

router.post("/create", passport.authenticate("jwt",{session:false}), async(req, res) =>{
    const {name, thumbnail, track} = req.body;
    if(!name || !thumbnail || !track){
        return res
        .status(400)
        .json({err: "Insufficient data"});
    }
    const artist = req.user._id;
    const songDetail = {name, thumbnail, track, artist};
    const createdSong = await Song.create(songDetail);
    return res
    .status(200)
    .json(createdSong);
});

router.get("/mysongs", passport.authenticate("jwt", {session: false}),
    async(req, res) => {
        const songs = await Song.find({artist: req.user._id});
        return res.status(200)
                .json({data: songs});
    }
);
router.get("/get/artist/:artistId", passport.authenticate("jwt",{session:false}), async(req,res) =>{
    const {artistId} = req.params;
    const artist = await User.find({_id: artistId});
    if(!artist){
        return res.status(301).json({err:"artist does not exist"});
    }
    const songs = await Song.find({artist:artistId});
    return res.status(200).json({data: songs});
});
router.get("/get/songname/:songName", passport.authenticate("jwt",{session:false}), async(req,res) =>{
    const {songName} = req.params;
    const songs = await Song.find({name:songName});
    return res.status(200).json({data:songs});
})



export default router;