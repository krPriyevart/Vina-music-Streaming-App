import mongoose from "mongoose";
import { isValidObjectId } from "mongoose";
import express from "express";
import passport from "passport";
import Playlist from "../../models/playlist.model.js";
import Song from "../../models/song.model.js";
import User from "../../models/user.model.js";

const router = express.Router();


router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;

    if (!name || !thumbnail || !songs || !Array.isArray(songs)) {
        return res.status(400).json({ err: "Insufficient or invalid data" });
    }

   
    const validSongs = songs.filter((songId) => isValidObjectId(songId));
    if (validSongs.length !== songs.length) {
        return res.status(400).json({ err: "Invalid song IDs provided" });
    }

    const playlistData = {
        name,
        thumbnail,
        songs: validSongs, 
        owner: currentUser._id,
        collaborators: [],
    };

    try {
        const playlist = await Playlist.create(playlistData);
        return res.status(201).json(playlist);
    } catch (error) {
        return res.status(500).json({ err: error.message });
    }
});

router.get("/get/playlist/:playlistId", passport.authenticate("jwt",{session:false}), async(req,res)=>{
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(301).json({err:"Invaid ID"})
    }
    return res.status(200).json(playlist);
});

router.get("/get/artist/:artistId", passport.authenticate("jwt", {session:false}), async (req, res) =>{
    const artistId = req.params.artistId;
    const artist = await User.findOne({_id: artistId});
    if(!artist){
        return res.status(304).json({err:"invalid artist ID"});
    }
    const playlist = await Playlist.find({owner:artistId});
    return res.status(200).json(playlist);
});

router.post("/add/song", passport.authenticate("jwt", {session:false}), async(req,res) =>{
    const currentUser = req.user;
    const {playlistId, songId} =   req.body;

    const playlist = await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(304).json({err:"playlist does not exist"})
    }
    if (
        playlist.owner.toString() !== currentUser._id.toString() &&
        !playlist.collaborators.includes(currentUser._id.toString())
      ){
        return res.status(400).json({err:"you are not allowed"})
    }
    const song = await Song.findOne({_id: songId});
    if(!song){
        return res.status(304).json({err:"song does not exist"});
    }
    playlist.songs.push(songId);
    await playlist.save();
    return res.status(200).json(playlist);
})













export default router;