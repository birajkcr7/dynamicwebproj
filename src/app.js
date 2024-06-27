const express = require("express");
const app = express();
require("./db/conn");
const User =require("./models/usermessage");
const path= require("path");
const hbs =require("hbs");

const port = process.env.PORT || 8000;

// setting the path
const staticPath= path.join(__dirname,"../public");
const tempPath = path.join(__dirname,"../templates/views");
const partials =  path.join(__dirname,"../templates/partials");

// middleware
app.use("/css",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/jq",express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false})); //getting data as jSON 
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partials);


// routing 
app.get("/", (req,res)=>{
    res.render("index");
})


// conatct user registration

app.post("/contact", async(req,res)=>{
    try {
        // res.send(res.body);

        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(error)
    }
})



app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});