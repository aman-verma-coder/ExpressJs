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
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let { username, id } = req.params;
    // res.send("You are on username page");
    res.send(`<h1>Welcome to abcd social site</h1><h2>Welcome to the official handle of ${username}. His/Her id is ${id}</h2>`);
});
app.get("/search", (req, res) => {
    console.log(req.query);
    let { q } = req.query;
    // res.send("no results");
    if (!q) {
        console.log("Nothing Searched");
        res.send(`<h1>Nothing Searched</h1>`)
    } else {
        console.log(`Someone has searched for ${q}`);;
        res.send(`<h2>Search Results for ${q}</h2>`);
    }
})
// app.get("/:name/:id", (req, res) => {
//     res.send(`Welcome ${name}. Your user id is ${id}`);
// });