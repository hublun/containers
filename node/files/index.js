const fs = require("fs")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter your file name:", filename => {
    readline.question("Enter your text: ", text =>{
        fs.writeFile(`${filename}.txt`, text, err =>{
            if (err) throw err
            console.log("File created as instructed...")
            readline.close()
        })
    })
})


