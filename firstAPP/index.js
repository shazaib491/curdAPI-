// import express app
const express = require("express");
require("./utils/db")
const app = express();
const blogRoute = require("./routes/blog.routes");

const PORT = 3000;

app.use(express.json());

app.use(blogRoute);

app.listen(PORT, () => {
    console.log("Server is listening at port ", PORT);
})


