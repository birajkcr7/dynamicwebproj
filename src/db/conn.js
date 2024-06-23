const mongoose =  require("mongoose");

// creating a database conection
mongoose.connect("mongodb://localhost:27017/dynaminProject",{})
.then(()=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log(`db not connected ${error}`);
});