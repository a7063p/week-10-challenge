const Employee = require('./Employee');

class General {
    constructor (name, email) {
        this.name = name;
        this.email = email;
        this.id = 0     
    }

getId() {
    this.id++
}
}






module.exports = General