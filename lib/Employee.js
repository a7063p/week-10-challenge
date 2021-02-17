const General = require('./General')

function Employee (name, email) {
    this.name = name;
    this.email = email;
    this.id = 0     
}

Employee.prototype.uniqueId = function() {
    this.id++
}

//getName()

// getEmail()

// getRole()
    
 
 



module.exports = Employee

