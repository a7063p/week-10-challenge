const General = require('./General')

class Engineer extends General { 
constructor (name, email, github) {
    super(name, email)
    this.github = github 
 }
}

const engineer1 = new Engineer('andrew', 'test@test.com', 'a7063p')

console.log(engineer1);

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