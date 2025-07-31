




const queries = require("../db/queries")

const { body, validationResult } = require("express-validator");


const rules = [
    body("cat_name").trim()
    .notEmpty().withMessage("Enter a category name")
    .isAlpha().withMessage("must containt only letters")

]

exports.Display_categories = async  (req,res)=>{


const rows = await queries.GetAllCategories();


res.render("category.ejs",{title : "Categories",categories : rows})

}

exports.add_category_get= (req,res)=>{

res.render("add_cat.ejs",{title : "ADD category" , errors : []})

}




exports.add_category_post = [rules,async (req,res)=>{

const errors = validationResult(req)

if(!errors.isEmpty()){
    return res.status(400).render("add_cat.ejs",{title : "ADD category",errors : errors.array()})
}

const {cat_name} = req.body

await queries.Add_Category(cat_name)

res.redirect("/category")

}
]


exports.update_category_get = async (req,res)=>{

const {rows}  = await queries.Get_Category_ByID(req.params.id)

res.render("update_cat.ejs",{title : "Update Category" , name : rows[0].name, id : req.params.id })

}




exports.update_category_post = async (req,res)=>{

const {cat_name} = req.body

await queries.UPDATE_Category_name(req.params.id,cat_name)

res.redirect("/category")

}


exports.delete_category_post = async (req,res)=>{

await queries.delete_Category(req.params.id)

res.redirect("/category")

}
