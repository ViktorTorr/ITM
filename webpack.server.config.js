const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Employee = require('./api/models/employeeModel');
// const Equipment = require('./api/models/equipmentModel');
const routes = require('./api/routes/employeeRoutes');
const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/EmployeeFinaldb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

//START ON PORT
app.listen(port);

console.log('employee list RESTful API server started on: ' + port);
