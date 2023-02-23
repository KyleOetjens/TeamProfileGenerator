const employeeQuestions =[
    {
        type: 'input',
        message: `Please provide the managers's name`,
        name: 'manName',
    }, {
        type: 'input',
        message: `Please provide the managers's id`,
        name: 'manId',
    }, {
        type: 'input',
        message: `Please provide the managers's email`,
        name: 'manEmail',
    },{
        type: 'input',
        message: `Please provide the managers's office number`,
        name: 'manOfficeNumber',
    },
    {
            type: 'loop',
            message: `Would you like to add more employee's?`,
            name: 'employees',
            questions: [
        
        {
            type: 'list',
            message: 'What type of emplyee would you like to add?',
            choices: [`Engineer`, `Intern`],
            name: 'type',
            
        },
        {
            type: 'input',
            message: `Please provide the employee's name`,
            name: 'empName',
        },
        {
            type: 'input',
            message: `Please provide the employee's ID number?`,
            name: `empId`,
        },
        {
            type: 'input',
            message: `Please provide the employee's email address`,
            name: 'empEmail',
        },
        {
            type: 'input',
            message: 'What is the engineers github username?',
            name: 'engGitUn',
            when: (employee) => employee.type === 'Engineer'
        },
        {
            type: 'input',
            message: 'Where did the Intern attend school?',
            name: 'intSchool',
            when: (employee) => employee.type === 'Intern'
        },
    ]
}
]
module.exports = employeeQuestions