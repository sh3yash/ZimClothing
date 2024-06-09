const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const clothes = [
    { name: 'Red Dress', description: 'A beautiful red dress.', price: 29.99 },
    { name: 'Blue Jeans', description: 'Comfortable blue jeans.', price: 49.99 },
    { name: 'Green T-shirt', description: 'A stylish green t-shirt.', price: 19.99 },
    { name: 'Yellow Jacket', description: 'Warm yellow jacket.', price: 59.99 },
    { name: 'Black Sweater', description: 'Cozy black sweater for chilly days.', price: 39.99 },
    { name: 'Striped Shirt', description: 'Casual striped shirt for everyday wear.', price: 24.99 },
    { name: 'Denim Jacket', description: 'Classic denim jacket with a modern twist.', price: 69.99 },
    { name: 'White Sneakers', description: 'Versatile white sneakers for any outfit.', price: 34.99 },
    { name: 'Floral Dress', description: 'Elegant floral dress for special occasions.', price: 54.99 },
    { name: 'Leather Boots', description: 'Stylish leather boots to elevate your look.', price: 79.99 },
    // Add more clothing items here
];


app.get('/clothes', (req, res) => {
    const query = req.query.q.toLowerCase();
    const filteredClothes = clothes.filter(item => item.name.toLowerCase().includes(query));
    res.json(filteredClothes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
