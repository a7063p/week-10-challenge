

function Engineer (name, email, github) {
    this.name = name;
    this.email = email;
    this.id = 0
    this.github = github  
}

Engineer.prototype.uniqueId = function() {
    this.id++
}

//getName()

// getEmail()

//getGithub()

// getRole()

module.exports = Engineer