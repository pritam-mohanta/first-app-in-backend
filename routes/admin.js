const express = require('express')
const path = require('path')

const rootDir = require('../util/path.js')

const router = express.Router()

router.get('/add-product',(req,res,next)=>{
  //console.log('second middleware')
  res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
  console.log(req.body) //we can get output object in here 
  res.redirect('/')
})

module.exports = router










// router.get('/add-product',(req,res,next)=>{
//   //console.log('second middleware')
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
// })