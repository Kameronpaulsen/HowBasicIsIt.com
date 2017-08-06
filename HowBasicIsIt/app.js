const express    = require('express');
const bodyParser = require("body-parser");
const app        = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('views'));


// ------------------------------- MAIN ------------------------------------ \\

// app.use(function(req, res, next) {                                                             
//     res.header("Access-Control-Allow-Origin", "*");                                            
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");                   
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");                                                                               
//     next();
// });

app.get("/", function (request, response) {
  response.sendFile(__dirname + 'index.html');
});

app.put("/kc_test", function (request, response) {
  response.send(request.body); //body-parser auto-serializes it for us
});

app.get("/kc_test/:ids?", function (request, response) {
  response.send(request.params); //body-parser auto-serializes it for us
});

var server = app.listen(8081, function(){
	var host= server.address().address
	var port = server.address().port

	console.log("example app listening at http://%s:%s", host, port)
})
