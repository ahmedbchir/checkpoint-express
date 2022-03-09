const express =require('express')
const app = express()
const port = 5000
const useRouter =require('./routes/route')

app.use(express.static("page"))
app.listen(port,(err)=>{
    err ? console.log(err) : console.log('the server is runing on port 5000')
})
// app.use('/',useRouter)
let currentData = new Date()
reqTime =(req,res,next)=>{
    console.log(req.originalURL,currentData.getDate())
    if (currentData.getHours() >9 &&currentData.getHours() <17 )
    next()
}