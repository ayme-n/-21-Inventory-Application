




const queries = require("../db/item_queries")

const { body, validationResult } = require("express-validator");


const rules = [
    body("item_name").trim()
    .notEmpty().withMessage("Enter a item name")
    

]

exports.Display_items = async  (req,res)=>{


const rows = await queries.GetAllItemByCategory(req.params.id);


res.render("items.ejs",{title : "Item",items : rows,id : req.params.id})

}

exports.Display_itemByID = async  (req,res)=>{


const {rows} = await queries.Get_Item_ByID(req.params.id_item);


res.render("item.ejs",{item : rows[0],id : req.params.id})

}


exports.add_item_get= (req,res)=>{

res.render("add_item.ejs",{title : "ADD item" , errors : [] , id : req.params.id})

}




exports.add_item_post = [rules,async (req,res)=>{

const errors = validationResult(req)

if(!errors.isEmpty()){
    return res.status(400).render("add_item.ejs",{title : "ADD item",errors : errors.array()})
}

const {item_name} = req.body
const {item_price} = req.body
const {item_img} = req.body
const {cat_id} = req.body



await queries.Add_Item(item_name,item_price,item_img,cat_id)

res.redirect(`/category/${cat_id}/items`)

}
]


exports.update_item_get = async (req,res)=>{

const {rows}  = await queries.Get_Item_ByID(req.params.id_item)

console.log(rows)

const id_item = req.params.id_item

res.render("update_item.ejs",{title : "Update item" , name : rows[0].name, id : req.params.id , item_price : rows[0].price , item_img : rows[0].image_url , item_id : id_item })

}




exports.update_item_post = async (req,res)=>{


const {item_name} = req.body
const {item_price} = req.body
const {item_img} = req.body
const {cat_id} = req.body


await queries.UPDATE_Item_name(req.params.id_item,item_name,item_price,item_img)

res.redirect(`/category/${cat_id}/items`)

}


exports.delete_item_post = async (req,res)=>{


await queries.delete_Item(req.params.id_item)

res.redirect(`/category/${req.params.id}/items`)

}
