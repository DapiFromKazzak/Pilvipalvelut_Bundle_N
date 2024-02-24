var express = require('express');

const app = express();
const port = 8000;

const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
//app.use('/', router);

app.listen(port, function(){
    console.log("Kuunnellaan porttia " + port);
});

app.get('/',function(request,response){
    response.send("Pilvipalvelut bundleN REST-API");
});

module.exports=app;