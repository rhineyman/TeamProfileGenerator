const Engineer = require('../lib/engineer')

test("retrieve GitHub user name", () => {
    const gitHub = "jonjonson"
    const e = new Engineer("Jon", "Jonson", 2121, gitHub)
    expect(e.github).toBe(gitHub);
  });