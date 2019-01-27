// content of index.js
const http = require('http')
const port = 3003

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('CORS shouldnt bother you now')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened CORS gon mess you up kid', err)
  }

  console.log(`server is listening on ${port}`)
})