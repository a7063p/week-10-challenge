const General = require('./General')

class Manager extends General { 
constructor (name, email, officeNumber) {
    super(name, email)
    this.officeNumber = officeNumber
 } 
}






module.exports = Manager