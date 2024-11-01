import mongoose from "mongoose";
const User = new mongoose.Schema({
    firstName: {
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
    password:{
        type:String,
        required:true
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
export default UserModel;