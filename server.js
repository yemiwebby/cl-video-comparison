const express = require("express");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


cloudinary.config({
    cloud_name: "sealuse-creatives",
    api_key: "899728326346178",
    api_secret: "aHFs9bZB9HhsXs7Wnm_enko475M",
});


app.get('/cloudinary/optimized', (req, res) => {
    res.send(cloudinary.video("bunny", {
        autoplay: true, controls: true, loop: true
    }));
})

app.get("/cloudinary/non-optimzed", (req, res) => {
    res.send(cloudinary.video("bunny", {
        autoplay: true, controls: true, loop: true
    }));
})

app.listen(3000);
console.log("Listening on localhost:3000")
