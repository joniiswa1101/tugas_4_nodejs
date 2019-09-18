let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

var port = process.env.PORT || 8000;

app.get('/', (reg,res) => res.send('Hello World'));
app.use('/api', apiRoutes);
app.listen(port, function() {
  console.log("Running Resthub on port" + port);
})
