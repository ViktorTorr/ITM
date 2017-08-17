'use strict';

const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const Equipment = mongoose.model('Equipment');

exports.list_all_equipment = function (req, res) {
  Equipment.find({}, function (err, eqp) {
    if (err)
      res.send(err);
    res.json(eqp);
  })
};

exports.list_all_employees = function (req, res) {
  Employee
    .find({})
    .exec(function (err, emp) {
      if (err)
        res.send(err);
      res.json(emp);
    })
};

exports.show_employee = function (req, res) {
  Employee
    .findById(req.params.employeeId)
    .populate('equipment')
    .exec(function (err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  })
};

exports.add_employee = function (req, res) {
  const new_emp = new Employee(req.body);
  new_emp.save(function (err, emp) {
    if (err)
      res.send(err);
    res.json({message: 'employee added successfully'});
  })
};

exports.add_equimpent = function (req, res) {
  const eqp = new Equipment(req.body);

  eqp.save();

  Employee.findById(req.params.employeeId, function (err, emp) {
    if (err)
      res.send(err);
    emp.equipment.push({_id:eqp._id});
    emp.save();
    res.json('equipment edited successfully');
  })
};

exports.delete_equipment = function (req, res) {
  Equipment.remove({_id: req.params.equipmentId}, function (err, eqp) {
    if (err)
      res.send(err);
  })

  Employee.findById(req.params.employeeId, function (err, emp) {
    if (err)
      res.send(err);
    emp.equipment.splice(emp.equipment.indexOf(req.params.equipmentId),1);
    emp.save();
    res.json({message: 'equipment removed successfully'});
  })
};

exports.update_equipment = function (req, res) {
  Equipment.findById(req.params.equipmentId, function (err, eqp) {
    if (err)
      res.send(err);
    eqp.serialNumber = req.body.serialNumber || '';
    eqp.manufacturer = req.body.manufacturer || '';
    eqp.type = req.body.type || '';

    eqp.save();
    res.json({message: 'update successful'});
  })
};

exports.show_equipment = function (req, res) {
  Equipment.findById(req.params.equipmentId, function (err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  })
};
