const Engineer = require("../lib/Engineer")

test("Constructor sets github username and function retrieves it", () => {
    const name = "John"
    const id = "5"
    const email = "sample@test.com"
    const github = "TestUser"

    const engineer = new Engineer(name, id, email, github)

    expect(engineer.github).toBe("TestUser")
    expect(engineer.getGithub()).toBe("TestUser")
})

test("Role is changed to engineer", () => {
    const engineer = new Engineer()
    expect(engineer.role).toBe("Engineer")
})