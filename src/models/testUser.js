const mongo=require('mongoose');
const schema=mongo.Schema;

testUser=new schema({
name:String,
lastName:String,
age:String,
country:String, 
province:String   
});
 module.exports= mongo.model('testUser',testUser);