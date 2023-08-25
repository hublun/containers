const express = require("express")
const process = require("process")

const app = express()

process.on("SIGINT", () =>{
    console.log("Application is being interupted !!!")
    process.exit(0)
})

process.on("SIGTERM", () =>{
    console.log("Application is being terminated !!!")
    process.exit(0)
})

app.get("/", function(req, res){
    res.send("Hello World !!!")
})

app.listen(3000)