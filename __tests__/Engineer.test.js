const Engineer = require("../lib/Engineer");

test("creates a engineer object", () => {
  const engineer = new Engineer("John", 1, "john@gmail.com", "johngithub");

  expect(engineer.name).toBe("John");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("john@gmail.com");
  expect(engineer.github).toBe("johngithub");
});

test("gets a engineer's name", () => {
  const engineer = new Engineer("John", 1, "john@gmail.com", "johngithub");

  expect(engineer.getName()).toBe("John");
});

test("gets a engineer's id", () => {
  const engineer = new Engineer("John", 1, "john@gmail.com", "johngithub");

  expect(engineer.getId()).toBe(1);
});

test("gets a engineer's email", () => {
  const engineer = new Engineer("John", 1, "john@gmail.com", "johngithub");

  expect(engineer.getEmail()).toBe("john@gmail.com");
});

test("gets an engineer's github", () => {
  const engineer = new Engineer("John", 1, "john@gmail.com", "johngithub");

  expect(engineer.getGithub()).toBe("johngithub");
});

test("gets a engineer's role", () => {
  const engineer = new Engineer("John", 1, "john@gmail.com");

  expect(engineer.getRole()).toBe("Engineer");
});
