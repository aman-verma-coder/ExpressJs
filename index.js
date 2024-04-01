const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
console.dir(app);
let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
app.use((req, res) => {
    console.log("request received");
    // res.send("Aman Verma");
    // res.send({
    //     Name: "Aman Verma",
    //     City: "Kolkata"
    // });
    res.send("<h1>Aman Verma</h1><ul><li>City- Kolkata</li><li>Hobbies- Watching Movies & Web Series, Playing Cricket, Exploring New Technologies<li/></ul>");
});