const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const employees = []
const managers = []
const engineers = []
const interns = []


function generator () {
inquirer
.prompt([
    {
        type: 'list',
        name: 'type',
        message: 'Please Select the type of Employee',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern']
    },
    {
    type:'text',
    name: 'name',
    message: 'Please Enter Your Name'
    },
    {
    type:'text',
    name: 'email',
    message: "Please enter employee's email"
    }

])  
    .then(({type, name, email, officeNumber}) =>{
        if (type === 'Manager'){
            inquirer
            .prompt([
                {
                type: 'text',
                name: 'officePhone',
                message: 'Please Enter your office phone number'
                },
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: 'yes'
                                       
                }

            ])
                managers.push(new Manager(name, email,officeNumber)) 
                console.log('number index', managers.length);
           
        }
        
 
    
        
    })  
}    

generator()








