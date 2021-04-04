const Intern = require('../lib/intern');

test("retrieve intern university", () => {
    const schoolName = "University of Alabama"
    const e = new Intern("Jon", "Jonson", 2122, schoolName);
    expect(e.school).toBe(schoolName);
  });