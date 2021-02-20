const General = require('./General')

class Engineer extends General { 
constructor (type, name, email, github) {
    super(type, name, email)
    this.github = github 
 }
}





// Employee.prototype.uniqueId = function() {
//     this.id++
// }



// const employee1 = new Employee('andrew', 'test@test.com')

// console.log(employee1);

// function Engineer (name, email, github) {
//     this.name = name;
//     this.email = email;
//     this.id = 0
//     this.github = github  
// }

// Engineer.prototype.uniqueId = function() {
//     this.id++
// }

//getName()

// getEmail()

//getGithub()

// getRole()

module.exports = Engineer