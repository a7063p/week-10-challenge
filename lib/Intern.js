const General = require('./General')

class Intern extends General { 
constructor (name, email, school) {
    super(name, email)
    this.school = school
    }
}
const intern1 = new Intern('andrew', 'test@test.com', 'UofA')

console.log(intern1);

//getName()

// getEmail()

//getSchool()

// getRole()

module.exports = Intern