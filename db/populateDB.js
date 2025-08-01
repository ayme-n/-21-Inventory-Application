#! /usr/bin/env node

const {Client} = require("pg")

const SQL =  `

DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS category;

CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(20) UNIQUE
);

INSERT INTO category (name) 
VALUES ('T-shirts'), ('Jeans'), ('Dresses'), ('Sneakers'), ('Jewelry'), ('Hats')
ON CONFLICT (name) DO NOTHING;

CREATE TABLE IF NOT EXISTS item (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(20),
  price DECIMAL(10,2),
  image_url VARCHAR(500),
  category_id INT REFERENCES category(id) ON DELETE CASCADE
);

INSERT INTO item (name, price, image_url, category_id) VALUES
-- T-shirts (category_id = 1)
('Graphic Tee', 19.99, 'https://example.com/images/tee1.jpg', 1),
('Vintage Tee', 21.50, 'https://example.com/images/tee2.jpg', 1),
('Striped Tee', 18.75, 'https://example.com/images/tee3.jpg', 1),

-- Jeans (category_id = 2)
('Blue Jeans', 49.99, 'https://example.com/images/jeans1.jpg', 2),
('Black Skinny Jeans', 54.99, 'https://example.com/images/jeans2.jpg', 2),
('Ripped Jeans', 59.99, 'https://example.com/images/jeans3.jpg', 2),

-- Dresses (category_id = 3)
('Floral Dress', 59.95, 'https://example.com/images/dress1.jpg', 3),
('Summer Dress', 62.50, 'https://example.com/images/dress2.jpg', 3),
('Evening Gown', 120.00, 'https://example.com/images/dress3.jpg', 3),

-- Sneakers (category_id = 4)
('Running Sneakers', 89.50, 'https://example.com/images/sneakers1.jpg', 4),
('High-top Sneakers', 95.00, 'https://example.com/images/sneakers2.jpg', 4),
('Low-top Trainers', 79.99, 'https://example.com/images/sneakers3.jpg', 4),

-- Jewelry (category_id = 5)
('Gold Necklace', 120.00, 'https://example.com/images/jewelry1.jpg', 5),
('Silver Bracelet', 85.00, 'https://example.com/images/jewelry2.jpg', 5),
('Diamond Earrings', 250.00, 'https://example.com/images/jewelry3.jpg', 5),

-- Hats (category_id = 6)
('Summer Hat', 25.00, 'https://example.com/images/hat1.jpg', 6),
('Baseball Cap', 15.50, 'https://example.com/images/hat2.jpg', 6),
('Wool Beanie', 22.00, 'https://example.com/images/hat3.jpg', 6);

`


async function main(){

    console.log("seeding")


    const client = new Client({
        connectionString : process.env.DATABASE_URL,
    })


   await client.connect();
   await client.query(SQL);
   await client.end();

   console.log("Done")



}

main();