'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
  type: { type: String, enum: ['screen', 'mouse', 'pc', 'keyboard']},
  manufacturer: String,
  serialNumber: String
})

module.export = mongoose.model('Equipment', EquipmentSchema, 'equipment');

const EmployeeSchema = new Schema({
  name: String,
  surname: String,
  githubUsername: String,
  equipment: [{type: Schema.Types.ObjectId, ref: 'Equipment'}]
})

module.exports = mongoose.model('Employee', EmployeeSchema);


