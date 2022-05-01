const Intern = require("../lib/Intern")

test("Constructor sets school and function retrieves it", () => {
    const name = "John"
    const id = "5"
    const email = "sample@test.com"
    const school = "UCF"

    const intern = new Intern(name, id, email, school)

    expect(intern.school).toBe("UCF")
    expect(intern.getSchool()).toBe("UCF")
})

test("Role is changed to intern", () => {
    const intern = new Intern()
    expect(intern.getRole()).toBe("Intern")
})