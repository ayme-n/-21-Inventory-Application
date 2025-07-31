

const pool = require("./pool")

async function GetAllCategories(){

const {rows} = await pool.query("SELECT * from category ORDER BY id")


return rows


}


async function Add_Category(cat_name){

await pool.query(`INSERT into category (name) values ($1)`,[cat_name])


}

async function Get_Category_ByID(ID){

const category = await pool.query(`SELECT * from category where id = $1` ,[ID])


return category


}


async function UPDATE_Category_name(ID,name){

await pool.query(`UPDATE category SET name = $1 where id = $2`,[name,ID])


}


async function delete_Category(ID){

await pool.query(`DELETE from category where id = $1`,[ID])


}

module.exports = {GetAllCategories,Add_Category,Get_Category_ByID,UPDATE_Category_name,delete_Category}