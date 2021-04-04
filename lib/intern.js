const Employee = require('./employee');

class Intern extends Employee {
    constructor(firstName, lastName, id, school){
        super(firstName, lastName, id);
    this.school = school;
    this.role = 'Intern';
    };

    getSchool() {
        return `${this.school}`;
    };
};

module.exports = Intern;