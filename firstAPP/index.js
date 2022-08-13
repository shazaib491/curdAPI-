// import express app
const express = require("express");

// calling express fucntion to get instance of express
const app = express();


const PORT = 3000;


// 12 43 45 65 67 

app.use(express.json());

// middlewares
// app.use(function (request, response, next) {
//     // console.log(request.body);
//     // console.log("Hello Wolrd");
//     // if (request.body.name == "sara^4-4-4") {
//     //     response.send("Sara name is not allowed")
//     // }else{
//     //     next();
//     // }
//     // response.send("Hello Wolrd");
//     next();
// })

// app.use("/display", function (request, response) {
//     console.log("Hello Nodejs")
// })

let arr = [];

app.get("/getData", (request, response) => {
    response.status(200).json({
        message: "successfully fetched",
        data: arr
    })
})

app.post("/saveData", (request, response) => {
    // let data = request.body;
    // let userData = {
    //     name: data.name,
    //     email: data.email
    // }
    const { name, email } = request.body;
    arr.push({name,email})
    response.status(201).json({
        message: "Detail saved",
        success: true
    })
})


// app.put("", () => { })

// app.patch("", () => { })

// app.delete("", () => { })



app.listen(PORT, () => {
    console.log("Server is listening at port ", PORT);
})