// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/:date_string?",(req,res)=>{
let date_string=req.params.date_string;
if(!date_string){
    let date = new Date();
    res.send({"unix":date.getTime(),"utc" : date.toUTCString()})
}else{
    let date=new Date(date_string);
    const isValidDate = (Boolean(+date) && date.getDate() == day);
    if (isValidDate){
        res.send({"unix":date.getTime(),"utc" : date.toUTCString()});
    }else{
        res.send({"error":"Invalid Date"});
    }
}

});

// listen for requests
var listener = app.listen(process.env.PORT||8080,  () =>{
  console.log('app is listening on port ' + listener.address().port);
});