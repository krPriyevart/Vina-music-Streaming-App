const mongoose = require("mongoose");
const User = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: false 
    },
    email: {
        type:String,
        require: true 
    },
    username: {
        type:String,
        require:true 
    },
    likedSong: {
        type: String,
        default :""
    },
    likedPlayList: {
        type: String,
        default: ""
    },
    subscribeArtist:{
        type:String,
        default:""
    }
});

const UserModel = mongoose.model("User", User);
module.export = UserModel;