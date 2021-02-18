const General = require('./General')

class Manager extends General { 
constructor (name, email, officeNumber) {
    super(name, email)
    this.officeNumber = officeNumber
 } 
}

const manager1 = new Manager('andrew', 'test@test.com', '702-121-8585')

console.log(manager1);



//getName()

// getEmail()

// getRole()

module.exports = Manager