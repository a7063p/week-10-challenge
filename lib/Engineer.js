const General = require('./General');

class Engineer extends General { 
constructor (type, id, name, email, github) {
    super(type, id, name, email)
    this.github = github 
 }
}

module.exports = Engineer