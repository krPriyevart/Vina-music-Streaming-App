import mongoose from "mongoose";
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

export default mongoose.model("song",Song);
