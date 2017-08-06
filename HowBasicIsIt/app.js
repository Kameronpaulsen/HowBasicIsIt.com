var express= require('express');

var app =  express();

const googleTrends= require('google-trends-api');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('views'));

app.get('/', function(req,res){
	res.sendFile(_dirname + "/" + "index.html");
});

app.get('/googletrends/:keyword?', function(req,res){

	var endDate = new Date();
	var startDate = new Date();
	startDate.setFullYear(endDate.getFullYear() -4);
	console.log(endDate);
	console.log(startDate);
	googleTrends.interestOverTime({keyword: req.params.keyword,startTime: startDate,endTime: endDate})
	//googleTrends.interestOverTime({keyword: req.params.keyword})
	.then(function(results){
  	res.send(results);
	})
});

app.get('/test', function(req,res){
	res.send("test");
});

var server = app.listen(3000, function(){
	var host= server.address().address
	var port = server.address().port

	console.log("example app listening at http://%s:%s", host, port)
})
