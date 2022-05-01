const Manager = require("../lib/Manager")

test("Constructor sets office number and function retrieves it", () => {
    const name = "John"
    const id = "5"
    const email = "sample@test.com"
    const officeNumber = "456"

    const manager = new Manager(name, id, email, officeNumber)

    expect(manager.officeNumber).toBe("456")
    expect(manager.getOfficeNumber()).toBe("456")
})

test("Role is changed to manager", () => {
    const manager = new Manager()
    expect(manager.getRole()).toBe("Manager")
})