const fs = require("fs")



//asunchromous

console.log("first console")
fs.readFile("file.txt" , (error,data)=>{
    console.log("error" , error);
    // stremingi reading ==> buffer
    console.log("data" , data.toString()); //display data in the form of streaming
    console.log("2nd  console")
})

console.log("third console")






//synchromuous functo --> no call back ---> functino inside function
// console.log(
//     'first programing'
// )
// const data = fs.readFileSync("file.txt")
// console.log("data: "  , data)
// console.log("data: "  , data.toString())
// console.log("last console");