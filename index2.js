const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
console.dir(app);
let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
app.get("/", (req, res) => {
    res.send("You contacted root path");
});
app.get("/contact", (req, res) => {
    res.send("You contacted contact path");
});
app.get("/search", (req, res) => {
    res.send("You contacted search path");
});
app.get("/content", (req, res) => {
    res.send("You contacted contentt path");
});
app.get("*", (req, res) => {
    res.send("This page does not exist");
});
app.post("/", (req, res) => {
    res.send("You contacted post root path");
});