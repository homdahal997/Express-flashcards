const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.send("<h1>I Love Team Tree House. It is a good coding teaching platform</h1>");
});

app.get("/hello", (req, res) =>{
    res.send("<h1>Hello Javascript Developer</h1>");
});

app.listen(3000, () => {
    console.log("The application is running localhost:3000");
});