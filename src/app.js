const express = require('express');
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"../public")));

const PORT = 3002;
app.listen(PORT, () => {
console.log( ` se prendio ${PORT} ` );
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"views/home.html"));
});


app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});