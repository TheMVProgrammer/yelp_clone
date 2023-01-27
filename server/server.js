require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require('./db');
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());

//Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {    
    try {
        const restaurants = await db.query('select * from restaurants');
        const restaurantRatingsData = await db.query('select * from restaurants LEFT JOIN (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.restaurant_id = reviews.restaurant_id;');

        res.status(200).json({
            status: "success",
            results: restaurantRatingsData.rowCount,
            data: {
                restaurants: restaurants.rows,
                reviews: restaurantRatingsData //Lo puse aparte aqui porque si lo pongo todo junto los restaurantes sin reviews me salen null
            },        
        });
    } catch (error) {
        console.log(error);
    }
});


//Get a restaurant

app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const restaurant = await db.query('SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.restaurant_id = reviews.restaurant_id WHERE restaurants.restaurant_id = $1', [req.params.id]);

        const reviews = await db.query('SELECT reviews_id, restaurant_id, name, review, rating FROM reviews WHERE restaurant_id = $1', [req.params.id]);
        
        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows
            },
        });
    } catch (error) {
        console.log(error);
    }
});

//Create a restaurant

app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query('INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *',
        [req.body.name, req.body.location, req.body.price_range]); 
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        });
    } catch (error) {
        console.log(error);
    }
});

//Update restaurants

app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE restaurant_id = $4 returning*', [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        });
    } catch (error) {
        console.log(error);
    }
});

//Delete restaurants

app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query('DELETE FROM restaurants WHERE restaurant_id = $1', [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (error) {
        console.log(error);
    }
});

app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
    try {
        const newReview = await db.query("INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4);", [req.params.id, req.body.name, req.body.review, req.body.rating]);
        res.status(201).json({
            status: 'success',
            data: {
                review: newReview.rows[0]
            },
        });
    } catch (error) {
        console.log(error);
    }
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

