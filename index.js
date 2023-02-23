const {buildManager, buildEngineers, buildInterns,buildTeam} = require(`./src/employee-generation`)
const employeeQuestions = require(`./employee-questions`)
const path = require(`path`)
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require(`./lib/employee`)
const Engineer = require(`./lib/engineer`)
const Manager = require(`./lib/manager`)
const Intern = require(`./lib/intern`);
inquirer.registerPrompt('loop', require(`inquirer-loop`)(inquirer))


function init() {
    inquirer.prompt(employeeQuestions)
.then((data) => {
    const teamManager = new Manager(data.manName, data.manId, data.manEmail, data.manOfficeNumber)
    const employees = data.employees
    const engineers = []
    const interns = []

    for(let i = 0; i < employees.length; i++) {
        const team = employees[i]
        if (team.type === "Engineer") {
            const engineer = new Engineer(team.empName, team.empId, team.empEmail, team.engGitUn)
            engineers.push(engineer)
            console.log(engineer);
        } else if (team.type === "Intern") {
            const intern = new Intern(team.empName, team.empId, team.empEmail, team.intSchool)
            interns.push(intern)
            console.log(intern);
        }
    }

    const managerCard = buildManager(teamManager)
    const engineerCards = buildEngineers(engineers)
    const internCards = buildInterns(interns)
    const teamPage = buildTeam(managerCard, engineerCards, internCards)


    fs.writeFile(path.join(__dirname,`./dist`,'index.html'), teamPage, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
})};
init()

