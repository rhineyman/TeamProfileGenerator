const Employee = require('./employee');

class Manager extends Employee {
    constructor(firstName, lastName, id, officeNumber) {
        super(firstName, lastName, id);

        this.role = 'Manager';
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return `${this.officeNumber}`;
    };
};

module.exports = Manager;