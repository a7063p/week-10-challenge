

function Manager (name, email, officeNumber) {
    this.name = name;
    this.email = email;
    this.id = 0
    this.officeNumber = officeNumber     
}

Manager.prototype.uniqueId = function() {
    this.id++
}

//getName()

// getEmail()

// getRole()

module.exports = Manager