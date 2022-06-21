const Intern = require("../lib/Intern");

test("creates a intern object", () => {
  const intern = new Intern("John", 1, "john@gmail.com", "UC Berkeley");

  expect(intern.name).toBe("John");
  expect(intern.id).toBe(1);
  expect(intern.email).toBe("john@gmail.com");
  expect(intern.school).toBe("UC Berkeley");
});

test("gets a intern's name", () => {
  const intern = new Intern("John", 1, "john@gmail.com", "UC Berkeley");

  expect(intern.getName()).toBe("John");
});

test("gets a intern's id", () => {
  const intern = new Intern("John", 1, "john@gmail.com", "UC Berkeley");

  expect(intern.getId()).toBe(1);
});

test("gets a intern's email", () => {
  const intern = new Intern("John", 1, "john@gmail.com", "UC Berkeley");

  expect(intern.getEmail()).toBe("john@gmail.com");
});

test("gets an intern's school", () => {
  const intern = new Intern("John", 1, "john@gmail.com", "UC Berkeley");

  expect(intern.getSchool()).toBe("UC Berkeley");
});

test("gets a intern's role", () => {
  const intern = new Intern("John", 1, "john@gmail.com", "UC Berkeley");

  expect(intern.getRole()).toBe("Intern");
});
