const fs= require("fs")
const dummyObj={
    "firstname":"Abhishek",
    "lastname":"Jani"
}

fs.writeFile("result.json", JSON.stringify(dummyObj),(error,data) =>{
    console.log("errror:",error)
})