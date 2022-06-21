const Employee = require("../lib/Employee");

test("creates a employee object", () => {
  const employee = new Employee("John", 1, "john@gmail.com");

  expect(employee.name).toBe("John");
  expect(employee.id).toBe(1);
  expect(employee.email).toBe("john@gmail.com");
});

test("gets a employee's name", () => {
  const employee = new Employee("John", 1, "john@gmail.com");

  expect(employee.getName()).toBe("John");
});

test("gets a employee's id", () => {
  const employee = new Employee("John", 1, "john@gmail.com");

  expect(employee.getId()).toBe(1);
});

test("gets a employee's email", () => {
  const employee = new Employee("John", 1, "john@gmail.com");

  expect(employee.getEmail()).toBe("john@gmail.com");
});

test("gets a employee's role", () => {
  const employee = new Employee("John", 1, "john@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
