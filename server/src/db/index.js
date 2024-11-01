//require('dotenv').config({path: './env'})
import mongoose from "mongoose";


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(process.env.URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: { w: 'majority' },
         }
    );
        console.log(`\n MongoDB is connected sir DB host : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection error or invalid URI", error);
        process.exit(1)
    }
}

export default connectDB