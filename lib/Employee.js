const General = require('./General');

class Employee extends General { 
constructor (type, id, name, email) {
    super(type, id, name, email)
 }
};

module.exports = Employee

