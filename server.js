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
    cloud_name: "YOUR_CLOUD_NAME",
    api_key: "YOUR_API_KEY",
    api_secret: "YOUR_API_SECRET",
});


app.get('/cloudinary/optimized', (req, res) => {
    res.send(cloudinary.video("bunny", {
        autoplay: true,
        controls: true,
        loop: true,
        quality: 50,
        bit_rate: "300k",
        width: 0.5,
        crop: "scale",
        video_codec: "auto"
    }));
})

app.get("/cloudinary/non-optimized", (req, res) => {
    res.send(cloudinary.video("bunny", {
        autoplay: true, controls: true
    }));
})

app.listen(3000);
console.log("Listening on localhost:3000")
