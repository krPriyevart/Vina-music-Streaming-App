const mongoose = require("mongoose");
const Playlist = new mongoose.Schema({
name: {
    type: String,
    require: true
},
thumbnail: {
    type: String,
    require: true 
},
owner: {
    type: mongoose.Types.ObjectId,
    ref: "user"
},
songs: [
    {
    type: mongoose.Types.ObjectId,
    ref: "songs"
},
],
collaborators: [
    {
    type: mongoose.Types.ObjectId,
    ref: "user"
},
]
});

const playlistModel = mongoose.model("playlist", Playlist);
module.exports = playlistModel;