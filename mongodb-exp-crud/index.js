const express =  require('express');
const  mongoose = require('mongoose');
const route = require('./Routes/userRoutes')
const app = express();

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log("Db connected Sucessfully")}
).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use(route)

app.listen(process.env.PORT,()=>{
console.log("server is running")
})