const express = require("express");

const app = express();

app.get("/", (request, response) =>{
    response.send("I Love Team Tree House. It is a good coding traching platform");
});

app.listen(3000);