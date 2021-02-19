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
    .then(({type, name, email,}) =>{
        if (type === 'Manager'){
            inquirer
            .prompt([
                {
                type: 'text',
                name: 'officePhone',
                message: 'Please Enter your office phone number'
                },

            ]) 
        .then(({officePhone}) => {  
         
            managers.push(new Manager(name, email, officePhone)) 
            console.log('number index', managers.length);
            console.log('managers',managers);
            console.log(`
            ==============================
            MANGER- ${name} Has Been Added
            ==============================
            `)
                inquirer
                .prompt({
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: 'yes'
                })
                .then(({confirmAddEmployee})=>{
                    if(confirmAddEmployee) {
                        generator()
                    } else {
                        return
                    }
                })
        })         
    } 
        
        else if(type === 'Engineer'){
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'github',
                message: 'Enter your GitHub userName:'
            }
        ])
            .then(({github}) => {
            engineers.push(new Engineer(name, email, github));
            console.log('number index', engineers.length);
            console.log('engineer',engineers);
            console.log(`
            ================================
            ENGINEER- ${name} Has Been Added
            ================================
            `);
            inquirer
            .prompt({
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: 'yes'
            })
            .then(({confirmAddEmployee})=>{
                if(confirmAddEmployee) {
                    generator()
                } else {
                return
                }
            })
        })

        } else if(type === 'Intern') {
            inquirer
        .prompt([
            {
                type: 'text',
                name: 'school',
                message: 'Enter your school:'
            }
        ])
            .then(({school}) => {
            interns.push(new Intern(name, email, school));
            console.log('number index', interns.length);
            console.log('intern',interns);
            console.log(`
            ===============================
            INTERN- ${name} Has Been Added
            ===============================
            `);
            inquirer
            .prompt({
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: 'yes'
            })
            .then(({confirmAddEmployee})=>{
                if(confirmAddEmployee) {
                    generator()
                    } else {
                        return
                    }
                })
            })

        } else {
            employees.push(new Employee(name,email));
            console.log('number index', employees.length);
            console.log('employee',employees);
            console.log(`
            ===============================
            Employee- ${name} Has Been Added
            ===============================
            `);
            inquirer
            .prompt({
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: 'yes'
            })
            .then(({confirmAddEmployee})=>{
                if(confirmAddEmployee) {
                    generator()
                    } else {
                        return
                    }
                })            

        }      
    })         
}    

generator()

module.exports = generator







