const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/schools", (err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to db")
    }
})

