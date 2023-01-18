require('dotenv').config();
const express = require("express");
const db = require('./db');
const morgan = require("morgan");
const app = express();

app.use(express.json());

//Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    
    const results = await db.query('select restaurant_id, name, location, price_range from restaurants');
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["Mcdonalds", "Wendys"],
        },        
    });
});


//Get a restaurant

app.get("/api/v1/restaurants/:id", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "McDonalds"
        }
    });
});

//Create a restaurant

app.post("/api/v1/restaurants", (req, res) => {
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "McDonalds"
        }
    });
});

//Update restaurants

app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "McDonalds"
        }
    });
});

//Delete restaurants

app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

