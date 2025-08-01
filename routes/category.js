const {Router} = require("express")

const CategoryController = require("../controllers/CategoryController")

const ItemController = require("../controllers/ItemController")


const category = Router();

category.get("/",CategoryController.Display_categories)

category.get("/add",CategoryController.add_category_get)

category.post("/add",CategoryController.add_category_post)

category.get("/update/:id",CategoryController.update_category_get)

category.post("/update/:id",CategoryController.update_category_post)

category.post("/delete/:id",CategoryController.delete_category_post)


//items


category.get("/:id/items",ItemController.Display_items)




category.get("/:id/item/add",ItemController.add_item_get)

category.post("/:id/item/add",ItemController.add_item_post)



category.get("/:id/item/update/:id_item",ItemController.update_item_get)

category.post("/:id/item/update/:id_item",ItemController.update_item_post)


category.post("/:id/item/delete/:id_item",ItemController.delete_item_post)

category.get("/:id/item/:id_item",ItemController.Display_itemByID)


module.exports = category;