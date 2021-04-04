class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = 'Employee';
        this.email = `${firstName}.${lastName}@freemail.com`;
        this.id = id;        
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getRole() {
        return this.role;
    };

    getEmail() {
        return this.email;
    };

    getId() {
        return `${this.id}`;
    };
};

module.exports = Employee;