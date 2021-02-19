const General = require('./General')

class Intern extends General { 
constructor (name, email, school) {
    super(name, email)
    this.school = school
    }
}




//getName()

// getEmail()

//getSchool()

// getRole()

module.exports = Intern