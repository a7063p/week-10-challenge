const General = require('./General');

class Manager extends General { 
constructor (type, id, name, email, officeNumber) {
    super(type, id, name, email)
    this.officeNumber = officeNumber
 } 
}

module.exports = Manager