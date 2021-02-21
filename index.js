const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const writeToFile = require('./src/generateHtml');
const generatePage = require('./src/page-template');


const employees = [];
const managers = [];
const engineers = [];
const interns = [];
const company = {managers, engineers, interns, employees};


function generator () {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Please Select the type of Employee:',
            choices: ['Manager', 'Engineer', 'Employee', 'Intern']
        },
        {
        type:'text',
        name: 'name',
        message: 'Please Enter Your Name:'
        },
        {
        type:'text',
        name: 'id',
        message:"Please enter employees ID number:"
        },
        {
        type:'text',
        name: 'email',
        message: "Please enter employee's email:"
        }
    
    ])  
        .then(({type, id, name, email,}) =>{
            if (type === 'Manager'){
                return inquirer
                .prompt([
                    {
                    type: 'text',
                    name: 'officeNumber',
                    message: 'Please Enter your office phone number'
                    },
    
                ]) 
            .then(({officeNumber}) => {  
             
                managers.push(new Manager(type, id, name, email, officeNumber)) 
                
                console.log(`
                ==============================
                MANGER- ${name} Has Been Added
                ==============================
                `)
                    return inquirer
                    .prompt({
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to add another employee?',
                        default: 'yes'
                    })
                    .then(({confirmAddEmployee})=>{
                        if(confirmAddEmployee) {
                            return generator()
                        } else {
                            return
                        }
                    })
            })         
        } 
            
            else if(type === 'Engineer'){
            return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'github',
                    message: 'Enter your GitHub userName:'
                }
            ])
                .then(({github}) => {
                engineers.push(new Engineer(type, id, name, email, github))
                console.log(`
                ================================
                ENGINEER- ${name} Has Been Added
                ================================
                `);
                return inquirer
                .prompt({
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: 'yes'
                })
                .then(({confirmAddEmployee})=>{
                    if(confirmAddEmployee) {
                    return generator()
                    } else {
                    return
                    }
                })
            })
    
            } else if(type === 'Intern') {
                return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'school',
                    message: 'Enter your school:'
                }
            ])
                .then(({school}) => {
                interns.push(new Intern(type, id, name, email, school));
                console.log(`
                ===============================
                INTERN- ${name} Has Been Added
                ===============================
                `);
                return inquirer
                .prompt({
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: 'yes'
                })
                .then(({confirmAddEmployee})=>{
                    if(confirmAddEmployee) {
                        return generator()
                        } else {
                            return
                        }
                    })
                })
    
            } else {
                employees.push(new Employee( type, id, name,email));
                console.log(`
                ===============================
                Employee- ${name} Has Been Added
                ===============================
                `);
                return inquirer
                .prompt({
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: 'yes'
                })
                .then(({confirmAddEmployee})=>{
                    if(confirmAddEmployee) {
                        return generator()
                        } else {
                            return
                        }
                    })            
    
            }      
        })         
    } ;   

generator()
    .then(data => {
        return generatePage(company)
    })
    .then(pageHTML => {
        return writeToFile(pageHTML)
    });



module.exports = generator


