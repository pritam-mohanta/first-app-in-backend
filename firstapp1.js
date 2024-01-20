//server throughnode js

const http = require('http') // export module http

const routes = require('./routs')//custom made routed file imported
const routes2 = require('./routs2')

console.log(routes2.someText)

const server = http.createServer(routes2.handler)

server.listen(4000)//the port this gone run


//console.log("Pritam")
  //console.log(req.url,req.method,req.headers)


  //way to get response
  // res.setHeader('content-type','text/html')
  // res.write('<html>')
  // res.write('<title>First response</title>')
  // res.write('<body><h1>Pritam Mohanta</h1></body>')
  // res.write('</html>')


  //first small project to handle maney route request

  // const url = req.url

  // if(url === '/home'){
  //   res.write('<html>')
  //   res.write('<title>home</title>')
  //   res.write('<body><h1>Welcome home</h1></body>')
  //   res.write('</html>')
  //   return res.end()
  // }

  // if(url === '/about'){
  //   res.write('<html>')
  //   res.write('<title>about</title>')
  //   res.write('<body><h1>Welcome to About Us page</h1></body>')
  //   res.write('</html>')
  //   return res.end()
  // }

  // if(url === '/node'){
  //   res.write('<html>')
  //   res.write('<title>node</title>')
  //   res.write('<body><h1>....Welcome to my Node Js project....</h1></body>')
  //   res.write('</html>')
  //   return res.end()
  // }

  // res.write('<html>')
  // res.write('<title>First response</title>')
  // res.write('<body><h1>Welcome to my Node Js project</h1></body>')
  // res.write('</html>')
  // res.end()
