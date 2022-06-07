const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile } = require("./src/generate-site");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamData = {};

const promptManager = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your team manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's id?",
        validate: (id) => {
          if (id && !isNaN(id)) {
            return true;
          } else {
            console.log("Please enter a valid id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter a valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        validate: (officeNumber) => {
          if (officeNumber && !isNaN(officeNumber)) {
            return true;
          } else {
            console.log("Please enter a valid office number!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      teamData.manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );

      teamData.teamMembers = [];
    });
};

const promptNewTeamMember = async () => {
  let newTeamMember = await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ],
    },
  ]);

  if (newTeamMember.role === "Engineer") {
    await promptEngineer();
    await promptNewTeamMember();
  } else if (newTeamMember.role === "Intern") {
    await promptIntern();
    await promptNewTeamMember();
  }
};

const promptEngineer = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
        validate: (id) => {
          if (id && !isNaN(id)) {
            return true;
          } else {
            console.log("Please enter a valid id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's Github?",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter your engineer's Github!");
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      let engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );

      teamData.teamMembers.push(engineer);
    });
};

const promptIntern = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
        validate: (id) => {
          if (id && !isNaN(id)) {
            return true;
          } else {
            console.log("Please enter a valid id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter your intern's school!");
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      let intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );

      teamData.teamMembers.push(intern);
    });
};

const init = () => {
  console.log("Please build your team:");

  promptManager()
    .then(promptNewTeamMember)
    .then(() => {
      return generatePage(teamData);
    })
    .then((pageHTML) => {
      return writeFile(pageHTML);
    })
    .catch((err) => {
      console.log(err);
    });
};

init();
