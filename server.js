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
    api_key: "API_KEY",
    api_secret: "API_SECRET",
});


app.get('/cloudinary/videos', (req, res) => {
    res.send(cloudinary.video("optimized-type", {
        autoplay: true, controls: true, loop: true
    }));
})

app.get("/other/videos", (req, res) => {
    res.send(axios.get("https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"));
})

app.listen(3000);
console.log("Listening on localhost:3000")
