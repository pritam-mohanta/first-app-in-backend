const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/',(req,res,next)=>{
  //console.log('second middleware')
  res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

module.exports = router









// router.get('/',(req,res,next)=>{
//   //console.log('second middleware')
//   res.send('<h1>hello to node js</h1>')
// })