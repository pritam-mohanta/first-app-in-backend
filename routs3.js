 const fs = require('fs')

  const url = req.url
  const method = req.method 

  function requestHandler(req,res){
    
  }

  if(url==='/'){

    //const filepath = path.join(__dirname,'message.txt')

    fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
      if(err){
        console.log(err)
      }
      console.log(`data from file`+ data)
      res.write('<html>')
    res.write('<title>Enter Massage</title>')
    res.write(`<body>${data}</body>`)
    res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
    })

  }

  else if(url==='/massage' && method ==='POST'){
    // fs.writeFileSync('message.txt','DUMMY')//create a new file
    const body = []
    req.on('data',(chunk)=>{
      console.log(chunk)//break the big data into small small part
      body.push(chunk) //push the data to body and hold it there
    })
    req.on('end',()=>{
      const parseBody = Buffer.concat(body).toString()
      console.log('ParseBody>>>',parseBody) //it is the massage we write over there
      const massage = parseBody.split('=')[1] //access the message get the data 
      fs.writeFile('message.txt',massage,(err)=>{  //and get the data and create an new file and store the data
        res.statusCode = 302 //network status
        res.setHeader('Location','/')//where relocate the page
        return res.end()
      })
    }) 
  }

  else{
    res.setHeader('content-type','text/html')
  res.write('<html>')
  res.write('<title>First response</title>')
  res.write('<body><h1>Pritam Mohanta</h1></body>')
  res.write('</html>')
  res.end()
  } 