'use strict';

module.exports = function (app) {
  const express = require('express');
  const router = express.Router();
  const employee = require('../controllers/employeeController');


  // employee routes
  router.get('/',employee.list_all_employees);
  router.post('/',employee.add_employee);

  router.get('/:employeeId',employee.show_employee);
  router.post('/:employeeId/addEq', employee.add_equimpent);

  router.get('/equipment', employee.list_all_equipment);
  router.get('/equipment/:equipmentId', employee.show_equipment);
  router.delete('/:employeeId/equipment/:equipmentId', employee.delete_equipment);
  router.put('/equipment/:equipmentId', employee.update_equipment);

  app.use('/employees', router);
}
