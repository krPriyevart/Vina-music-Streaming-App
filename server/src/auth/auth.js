import express from "express";
import User from "../../models/user.model.js"
import bcrypt from "bcrypt"
import { getToken } from "../utils/index.js";

// import { use } from "passport";

const router = express.Router();

router.post("/register", async(req, res) => {
    const {email, password, firstName, lastName, username} = req.body;
    console.log(req.body);
    const user = await User.findOne({email:email});
    if(user) {
        return res
        .status(403)
        .json({error: "user already exist"});
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const newUserData = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        username,
    };
    const newUser = await User.create(newUserData);    
    const token = await getToken(email, newUser);
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

router.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email:email});
    if(!user){
        return res
        .status(403)
        .json({error: "invalid credentials"});
    }
    const isPasswordalid = await bcrypt.compare(password, user.password);
    if(!isPasswordalid){
        return res
        .status(403)
        .json({error: "invalid credentials"});
    }
    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);

})

// module.exports = router;
export default router;