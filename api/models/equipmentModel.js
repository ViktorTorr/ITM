'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
  type: { type: String, enum: ['screen', 'mouse', 'pc', 'keyboard']},
  manufacturer: String,
  serialNumber: String,
  GitHubUsername: String
})

module.exports = mongoose.model('Equipment', EquipmentSchema);
