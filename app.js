

const express = require("express")
const path = require("node:path");
const { title } = require("node:process");


const category = require("./routes/category")
const index = require("./routes/index")


const app = express();



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));




app.use("/",index)
app.use("/category",category)

app.listen("3000",()=>{
    console.log("listening")
})