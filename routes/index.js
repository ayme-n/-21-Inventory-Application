const {Router} = require("express")

const index_Controller = require("../controllers/index")


const index = Router();

index.get("/",index_Controller)



module.exports = index;