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
        type: 'confirm',
        message: 'Do you want to add another employee?',
        name: 'addEmployee'
    }
]

const promptQues = () => {
    return inquirer.prompt(questions)
        .then(userResponse => {
            employees.push(userResponse);
            console.log(employees);
        })
}

promptQues();