import mongoose from "mongoose";

export const Connection = async (username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-mp5kpip-shard-00-00.wne0e7m.mongodb.net:27017,ac-mp5kpip-shard-00-01.wne0e7m.mongodb.net:27017,ac-mp5kpip-shard-00-02.wne0e7m.mongodb.net:27017/FLIPKART-CLONE?ssl=true&replicaSet=atlas-d3m11w-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
          await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
          console.log('database connected')
    }
    catch(error){
        console.log("error connecting database", error.message);
    }
}

export default Connection;