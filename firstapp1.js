//server throughnode js
const http = require('http') // export module http

const express = require('express') //require express 

const app = express()

app.use((req,res,next)=>{
  console.log('first middleware')
  next()
})

app.use((req,res,next)=>{
  console.log('second middleware')
  res.send('<h1>hello to node js</h1>')
})

const server = http.createServer(app)

server.listen(4000)//the port this gone run