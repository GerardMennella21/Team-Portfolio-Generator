const Employee = require('../lib/Employee')

test("Creates new employee object", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})

test("Constructor arguments set name, id, and email", () => {
    const name = "John"
    const id = "5"
    const email = "sample@test.com"

    const employee = new Employee(name, id, email)

    expect(employee.name).toBe("John")
    expect(employee.id).toBe("5")
    expect(employee.email).toBe("sample@test.com")
})

test("Functions successfully retrieve name, id, and email", () => {
    const name = "John"
    const id = "5"
    const email = "sample@test.com"

    const employee = new Employee(name, id, email)

    expect(employee.getName()).toBe("John")
    expect(employee.getId()).toBe("5")
    expect(employee.getEmail()).toBe("sample@test.com")
})

test("role is employee & getRole returns employee", () => {
    const name = "John"
    const id = "5"
    const email = "sample@test.com"

    const employee = new Employee(name, id, email)

    expect(employee.role).toBe("Employee")
    expect(employee.getRole()).toBe("Employee")
})