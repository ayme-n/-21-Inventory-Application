#! /usr/bin/env node

const {Client} = require("pg")

const SQL =  `


CREATE TABLE IF NOT EXISTS category (

id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

name VARCHAR(20)


);


INSERT INTO category (name) values ('Clothes') , ('Shoes') , ('Accessories');



`

async function main(){

    console.log("seeding")


    const client = new Client({
        connectionString : "postgresql://aymen:azeaze123@localhost:5432/aymen",
    })


   await client.connect();
   await client.query(SQL);
   await client.end();

   console.log("Done")



}

main();