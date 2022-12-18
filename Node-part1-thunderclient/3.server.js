const http = require("http")
http.createServer((req, res) => {
    console.log("Server is running")
    console.log("pathname:", req.url)
    console.log("method:", req.method)

    if (req.url == "/users") {
        if (req.method == "GET") {
            res.write("user information ")
        }
        if (req.method == "POST") {
            res.write("user information created")
            console.log(res)
        }
        return res.end()
    }
    res.write("Hello World!")
    res.end()
})
.listen(8000)
