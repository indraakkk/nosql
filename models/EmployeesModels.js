var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EmployeesSchema = new Schema({
    emp_no: String,
    birth_date: Date,
    first_name: String,
    last_name: String,
    gender: String,
    hire_date: Date
})

let EmployeesModels = mongoose.model('employees', EmployeesSchema, 'employees', true)
module.exports.EmployeesModels = EmployeesModels