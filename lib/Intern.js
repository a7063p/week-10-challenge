function Intern (name, email, school) {
    this.name = name;
    this.email = email;
    this.id = 0
    this.school = school 
}

Intern.prototype.uniqueId = function() {
    this.id++
}

//getName()

// getEmail()

//getSchool()

// getRole()

module.exports = Intern