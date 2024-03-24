import mongoose from "mongoose";

 export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName : "Hotel",
    })
.then(() =>{
    console.log("connected to database sucessfully!");
}).catch(err =>{
    console.log(`Some error occured while connecting to database! ${err}`)
}

)};
