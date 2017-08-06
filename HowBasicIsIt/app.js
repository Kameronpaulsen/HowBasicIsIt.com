var express= require('express');
var app =  express();

const googleTrends= require('google-trends-api');

app.use(express.static('views'));

app.get('/', function(req,res){
	res.sendFile(_dirname + "/" + "index.html");

});

app.get('/googletrends/:keyword', function(req,res){

	var endDate = New Date();
	var startDate = endDate(endDate.getMonth()-1);

	console.log(endDate);
	console.log(startDate);

	googleTrends.interestOverTime({keyword: req.params.keyword,startTime: startDate,endTime: endDate})
	.then(function(results){
  	res.send(results);
	})
	
});

var server = app.listen(8081, function(){
	var host= server.address().address
	var port = server.address().port

	console.log("example app listening at http://%s:%s", host, port)
})