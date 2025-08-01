

const pool = require("./pool")

async function GetAllItemByCategory(category_id){

const {rows} = await pool.query("SELECT * from item where category_id = $1 ORDER BY id",[category_id])


return rows


}


async function Add_Item(item_name,item_price,item_img,cat_id){

await pool.query(`INSERT into item (name,price,image_url,category_id) values ($1,$2,$3,$4)`,[item_name,item_price,item_img,cat_id])


}

async function Get_Item_ByID(ID){

const Item = await pool.query(`SELECT * from item where id = $1` ,[ID])


return Item


}


async function UPDATE_Item_name(ID,name,price,img){

await pool.query(`UPDATE item SET name = $1,price = $2 , image_url=$3 where id = $4`,[name,price,img,ID])


}


async function delete_Item(ID){

await pool.query(`DELETE from item where id = $1`,[ID])


}

module.exports = {GetAllItemByCategory,Add_Item,Get_Item_ByID,UPDATE_Item_name,delete_Item}