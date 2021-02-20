const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const writeToFile = require('./src/generateHtml');
const generatePage = require('./src/page-template');


const employees = []
const managers = []
const engineers = []
const interns = []
const employeeArr = {managers, engineers,interns,employees}


function generator () {
    return inquirer
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
             
                managers.push(new Manager(type,name, email, officePhone)) 
                
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
                interns.push(new Intern(type, name, email, school));
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
                employees.push(new Employee( type, name,email));
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
    }    

generator()
    .then(data => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeToFile(pageHTML)
    })



module.exports = generator


