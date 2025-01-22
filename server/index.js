const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const username = require('./routes/users')
const getmydata = require('./routes/getmy_data')
const report = require('./routes/reportApi')
const getmyreport = require('./routes/getmyReport')
const getReport = require('./routes/getReport')
const doctor = require('./routes/doctor')
const getdoctor=require('./routes/getdoctor')

const app = express();


app.use(express.json());
app.use(cors());
app.use('/api',username);
app.use('/api',getmydata);
app.use('/api',report);
app.use('/api',getmyreport);
app.use('/api',getReport);
app.use('/api',doctor);
app.use('/api',getdoctor);


const port = 3000
const DB = "mongodb+srv://amando1010:asdfghjkl@cluster0.ilyad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0l";


mongoose.connect(DB,{
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})










