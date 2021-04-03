const fs = require('fs')
const inquirer = require('inquirer')
const info = require('./dist/info.js')
const employees = [];

const questions = [
    {
        type: 'list',
        message: 'What is the employees role?',
        name: 'role',
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
        when: ({role}) => {
            if (role === 'Manager') {
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
        when: ({role}) => {
            if(role === 'Engineer') {
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
        when: ({role}) => {
            if(role === 'Intern') {
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
            generateHtml();
            };
        })
}

function generateHtml () {
    let finalHtml = `${info.header}`
    employees.forEach(employee => {
        if (employee.role === 'Manager') {            
        
    var card = `    <div class="card">        
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${employee.firstName} ${employee.lastName}</p>
          <p class="subtitle is-5">${employee.role}</p>
          <p class="subtitle is-6">ID:${employee.id}</p>
          <p class="subtitle is-6">Office:${employee.officeNumber}</p>
        </div>
      </div>
  
      <div class="content">
        You can email me with any questions at <a>${employee.firstName}${employee.lastName}@freemail.com</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>            
      </div>
    </div>
  </div>
`} else if (employee.role === 'Engineer') {
    var card = `    <div class="card">        
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${employee.firstName} ${employee.lastName}</p>
          <p class="subtitle is-5">${employee.role}</p>
          <p class="subtitle is-6">ID:${employee.id}</p>
          <p class="subtitle is-6">GitHub:${employee.github}</p>
        </div>
      </div>
  
      <div class="content">
        You can email me with any questions at <a>${employee.firstName}${employee.lastName}@freemail.com</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>            
      </div>
    </div>
  </div>
`
} else {
    var card = `    <div class="card">        
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${employee.firstName} ${employee.lastName}</p>
          <p class="subtitle is-5">${employee.role}</p>
          <p class="subtitle is-6">ID:${employee.id}</p>
          <p class="subtitle is-6">School:${employee.school}</p>
        </div>
      </div>
  
      <div class="content">
        You can email me with any questions at <a>${employee.firstName}${employee.lastName}@freemail.com</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>            
      </div>
    </div>
  </div>
`
}
finalHtml = finalHtml+card;
    })
        
renderedHtml = finalHtml+info.footer;

fs.writeFile('./dist/index.html', renderedHtml, (err,data) => {
    if (err) {
        throw err;
    } console.log('successuflly created html');
})       
    
};

promptQues();