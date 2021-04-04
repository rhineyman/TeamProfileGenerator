const Employee = require('../lib/employee')

test("retrieve ID", () => {
    const userID = 9;
    const e = new Employee("first", "last", userID);
    expect(e.getId()).toBe(`${userID}`);
});

test("expect object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

test("retrieve name", () => {
    const userFirstName = "Jon";
    const userLastName = "Doe";
    const e = new Employee(userFirstName, userLastName);
    expect(e.getName()).toBe("Jon Doe");
});