const mongoose = require('mongoose');

exports.dbConn = ()=>{
    const dbURL = "mongodb+srv://ramchandra:Rout123@cluster0.3hbas.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log("Database Connected");
    }).catch((err)=>console.log(err));
} 