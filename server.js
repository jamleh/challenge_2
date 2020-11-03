var express=require('express');
var app=express();
// middleware method 
app.use(express.json());
app.use(express.urlencoded());
app.post('/data',function(req,res){
   // make JSON strengify fr Object but it does not work for Now 
   response = {  
    data:req.body.jsonData  
     
};  
console.log(response,req.body);  
res.send(JSON.stringify(response));  
});
app.listen(8080,function(){
    console.log("server at localhost:8080");
})