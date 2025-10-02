const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    //res.send("Hello, World!");
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.listen(port, ()=> {
    console.log(`Web is running on Port: ${port}`)
});