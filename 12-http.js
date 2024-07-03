const http = require('http');

const server = http.createServer((req, res)=>{
//req represents the incoming request from the user
//res or response is what is being sent back
console.log(req)
if (req.url === '/'){
    res.end('Welcome to our home page')
}
if (req.url === '/about'){
    res.end('here is our short history ')
}
res.end(
    `<h1>Ooops!</h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `)
})
server.listen(2000)