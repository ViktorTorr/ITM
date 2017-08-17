const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Employee = require('./api/models/employeeModel');
// const Equipment = require('./api/models/equipmentModel');
const routes = require('./api/routes/employeeRoutes');
const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Employee3db');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);
//ROUTES


// const router = express.Router();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
//
// app.get('/user', function (req, res) {
//   res.json({user: 'dupa'});
// })
//
// //PREFIX
// app.use('/api/employees', routes);

//START ON PORT
app.listen(port);

console.log('employee list RESTful API server started on: ' + port);
