const Employee = require("./Employee")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")
const inqurier = require("inquirer")
const fs = require("fs")

class App {
    constructor() {
        this.employees =[]
        this.employeePrompt = [
            {
                type: "list",
                message: "Choose Employee's Role",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                message: "Enter Employee's Name",
                name: "name",
                validate: name => {
                    if (name) {
                        return true
                    } else {
                        console.log("Please enter employee's name!")
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "Enter Employee's ID",
                name: "id",
                validate: id => {
                    if (id) {
                        return true
                    } else {
                        console.log("Please enter employee's ID!")
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "Enter Employee's Email",
                name: "email",
                validate: email => {
                    if (email) {
                        return true
                    } else {
                        console.log("Please enter employee's email")
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "Enter Office Number",
                name: "officeNumber",
                when: (employee) => employee.role === "Manager",
                validate: officeNumber => {
                    if (officeNumber) {
                        return true
                    } else {
                        console.log("Please enter office number!")
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "Enter School Name",
                name: "school",
                when: (employee) => employee.role === "Intern",
                validate: school => {
                    if (school) {
                        return true
                    } else {
                        console.log("Please enter employee's school")
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "Enter Github Username",
                name: "github",
                when: (employee) => employee.role === "Engineer",
                validate: github => {
                    if (github) {
                        return true
                    } else {
                        console.log("Please enter employee's github")
                        return false
                    }
                }
            },
            {
                type: "confirm",
                name: "addEmployee",
                message: "Would you like to add another employee?",
                default: "false"
            }
        ]
    }

    run() {
        inqurier.prompt(this.employeePrompt).then(data => {
            switch (data.role) {
                case "Manager":
                    this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber))
                    break
                case "Engineer":
                    this.employees.push(new Engineer(data.name, data.id, data.email, data.github))
                    break
                case "Intern":
                    this.employees.push(new Intern(data.name, data.id, data.email, data.school))
                    break
            }
            if (data.addEmployee) {
                this.run()
            } else {
                console.log(this.employees)
            }
        })
    }
}

module.exports = App