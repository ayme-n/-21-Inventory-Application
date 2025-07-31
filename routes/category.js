const {Router} = require("express")

const CategoryController = require("../controllers/CategoryController")

const category = Router();

category.get("/",CategoryController.Display_categories)

category.get("/add",CategoryController.add_category_get)

category.post("/add",CategoryController.add_category_post)

category.get("/update/:id",CategoryController.update_category_get)

category.post("/update/:id",CategoryController.update_category_post)

category.post("/delete/:id",CategoryController.delete_category_post)



module.exports = category;