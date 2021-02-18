
const General = require('./General')

class Employee extends General { 
constructor (name, email) {
    super(name, email)
 }
}

// Employee.prototype.uniqueId = function() {
//     this.id++
// }



const employee1 = new Employee('andrew', 'test@test.com')


console.log(employee1);
//getName()

// getEmail()

// getRole()
    
 
 



module.exports = Employee

