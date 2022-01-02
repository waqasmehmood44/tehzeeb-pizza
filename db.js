const  mongoose  = require("mongoose");


// var mongourl="mongodb+srv://waqas226:hHH5aPfFdVc2gdL@cluster0.adpto.mongodb.net/PROJECT?retryWrites=true&w=majority"


var mongourl="mongodb+srv://waqas226:hHH5aPfFdVc2gdL@cluster0.adpto.mongodb.net/tehzeeb_pizza"
mongoose.connect(mongourl,{useUnifiedTopology:true, useNewUrlParser:true})

var db=mongoose.connection
db.on('connected',()=>{
    console.log('Mongo DB  Connection Successful')
})

db.on('error',()=>{
    console.log('Mongo DB  Connection Failed')
})
module.exports=mongoose
 