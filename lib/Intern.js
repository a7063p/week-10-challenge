const General = require('./General');

class Intern extends General { 
constructor (type, id, name, email,school) {
    super(type, id, name, email)
    this.school = school
    }
}

module.exports = Intern