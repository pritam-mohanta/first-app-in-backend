//server throughnode js

const http = require('http') // export module http

const server = http.createServer((req,res)=>{    //create a new server
  console.log("Pritam")
  console.log(req)
})

server.listen(4000)//the port this gone run