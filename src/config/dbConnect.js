import mongoose, { mongo } from "mongoose";

async function connectToDatabase () {
    //add password and the name collection after mongodb.net 
    mongoose.connect(process.env.MONGO_CONNECTION);
    return mongoose.connection;
};

export default connectToDatabase;