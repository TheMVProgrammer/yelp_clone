require('dotenv').config();

const express = require("express");

const app = express();

app.get("/getRestaurants", (req, res) => {
    console.log("Get all restaurants");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});