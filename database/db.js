import mongoose from "mongoose";

export const Connection = async (URL) => {
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log(`Database Connected Succesfully on port`);
    } catch(error){
        console.log('Error while connecting', error.message);
    }
}

export default Connection;