const fs = require('fs')
const inquirer = require('inquirer')
const employees = [];

const questions = [
    {
        type: 'list',
        message: 'What is the employees job title?',
        name: 'title',
        choices: ['Manager', 'Engineer', 'Intern']
    },

    {
        type: 'input',
        message: 'What is the employees first name?',
        name: 'firstName'
    },
    
    {
        type: 'input',
        message: 'What is the employees last name?',
        name: 'lastName'
    },
    
    {
        type: 'input',
        message: 'What is their employee ID number',
        name: 'id'
    },

    {
        type: 'input',
        message: 'What is the Managers office number?',
        name: 'officeNumber',
        when: ({title}) => {
            if (title === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What is the Engineers GitHub username?',
        name: 'github',
        when: ({title}) => {
            if(title === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    
    {
        type: 'input',
        message: 'What University does the intern attend?',
        name: 'school',
        when: ({title}) => {
            if(title === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'confirm',
        message: 'Do you want to add another employee?',
        name: 'addEmployee'
    }
]

const promptQues = () => {
    return inquirer.prompt(questions)
        .then(userResponse => {
            employees.push(userResponse);
            if (userResponse.addEmployee) {
                return promptQues();
            } else {            
            console.log(employees);
            };
        })
}

promptQues();