const express = require ('express');
const morgan=require('morgan') ;
const mongo = require('mongoose');
const app=express();
const cors=require('cors');
//conection
mongo.connect('mongodb://localhost/crud-user')
.then(db=>console.log('db connected'))
.catch(err=>console.log(err));
//import routes 
const indexRoutes= require('./routes/index');
const { use } = require('./routes/index');
//settings
app.set('port',process.env.PORT|| 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
//routes
app.use('/',indexRoutes);

//server on
app.listen(app.get('port'),()=>{
   console.log(`server on in port ${app.get('port')}`) 
})