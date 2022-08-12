// express package import 
const express = require("express");


const app = express();//top level function call or store instance of express app

const PORT = 4000; //portno

// to create a server in nodejs 
app.listen(PORT, () => {
    console.log("Server is lisetening at port no", PORT)
})