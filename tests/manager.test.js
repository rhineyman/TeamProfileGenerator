const Manager = require('../lib/manager');

test("retrieve office number", () => {
    const officeNumber = 10;
    const e = new Manager("Mike", "Rhiney", 2121, officeNumber);
    expect(e.officeNumber).toBe(10);
  });