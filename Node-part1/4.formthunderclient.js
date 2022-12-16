const http = require("http")
const qs=require("querystring")
const DATA=[]


http.createServer((req, res) => {
    console.log("Server is running")
    console.log("pathname:", req.url)
    console.log("method:", req.method)

    if (req.url == "/users") {
        if (req.method == "GET") {
            res.write(JSON.stringify(DATA))
            return res.end()

        }
        if (req.method == "POST") {
            let body = ""
            req.on('data', chunk => {
                body += chunk.toString()
            })
            return req.on('end', () => {
                console.log(body)
                DATA.push(qs.parse(body))
                res.write("User Created.")
                res.end('ok')
            })
        }
        return res.end()
    }
    res.write("Hello World!")
    res.end()
})
    .listen(8000)
