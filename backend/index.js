const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port = 3000

app.use(express.json())
// const user=require('./models/userModel')
const router=require("./Routes/userRoutes")
mongoose.connect("mongodb://localhost:27017/UserDetails")
.then(()=>console.log("connected to mongoose "))
.catch(err=>console.log("could not connect to monoose...",err),)



app.use(router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});