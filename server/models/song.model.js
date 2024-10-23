const mongoose = require("mongoose");
const Song = new mongoose.Schema({
    name: {
        type: String,
        requre: true
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    thumbnail: {
        type: String,
        require: true 
    },
    track: {
        type : String,
        require: true
    }
});

const songModel = mongoose.model("song",Song);
module.exports = songModel;