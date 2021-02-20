const General = require('./General')

class Intern extends General { 
constructor (type, name, email, school) {
    super(type, name, email)
    this.school = school
    }
}




//getName()

// getEmail()

//getSchool()

// getRole()

module.exports = Intern