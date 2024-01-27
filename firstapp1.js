//server throughnode js
const express = require('express') //require express 
const bodyParser = require('body-parser')//require body-parser in code base
const path = require('path')

const app = express()

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'public')))


app.use(adminRoutes)
app.use(shopRoutes)


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000)







// app.use((req,res,next)=>{
//   console.log('first middleware')
//   next()
// })     //--> Basic Middleware


// app.use('/product',(req,res,next)=>{
//   console.log(req.body) //we can get output object in here
//   console.log(req.body.title) 
//   res.redirect('/')
// }) ---> in here it execute any type of hhtp request or method



// app.use('/add-product',(req,res,next)=>{
//   //console.log('second middleware')
//   res.send('<form action="/product" method="POST">Product Name:<input type="text" name="title">Product size:<input type="number" name="size"><button type="submit">Add product</button></form>')
// })

// app.post('/product',(req,res,next)=>{
//   console.log(req.body) //we can get output object in here
//   console.log(req.body.title)
//   console.log(req.body.size) 
//   res.redirect('/')
// })



// app.use('/',(req,res,next)=>{
//   //console.log('second middleware')
//   res.send('<h1>hello to node js</h1>')
// })


// app.use((req,res,next)=>{
//   res.status(404).send('<h1>Page not found</h1>')
// })