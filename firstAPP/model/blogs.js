const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    body: String
})

const blogTable = mongoose.model("blog", blogSchema);

module.exports = blogTable;