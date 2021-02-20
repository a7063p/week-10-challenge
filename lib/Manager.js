const General = require('./General')

class Manager extends General { 
constructor (type, name, email, officeNumber) {
    super(type, name, email)
    this.officeNumber = officeNumber
 } 
}






module.exports = Manager