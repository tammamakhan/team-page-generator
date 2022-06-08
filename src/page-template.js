const generateManager = (manager) => {
  return `<div class="card m-4 bg-primary" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: ${manager.getEmail()}</li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>`;
};

const generateEngineers = (teamMembers) => {
  return `${teamMembers
    .map((teamMember) => {
      if (teamMember.getRole() !== "Engineer") return;

      return `<div class="card m-4 bg-primary" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${teamMember.getName()}</h5>
    <p class="card-text">${teamMember.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${teamMember.getId()}</li>
    <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
    <li class="list-group-item">Github: <a href="https://github.com/${teamMember.getGithub()}" class="card-link">${teamMember.getGithub()}</a></li>
  </ul>
</div>`;
    })
    .join("")}
`;
};

const generateInterns = (teamMembers) => {
  return `${teamMembers
    .map((teamMember) => {
      if (teamMember.getRole() !== "Intern") return;

      return `<div class="card m-4 bg-primary" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${teamMember.getName()}</h5>
    <p class="card-text">${teamMember.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${teamMember.getId()}</li>
    <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
    <li class="list-group-item">School: ${teamMember.getSchool()}</li>
  </ul>
</div>`;
    })
    .join("")}
`;
};

module.exports = (teamData) => {
  return `<!doctype html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>
    <div class="container-fluid bg-dark">
      <h1 class="text-center font-weight-bold text-primary py-5">My Team</h1>
    </div>
    <div class="container-fluid d-flex justify-content-center">
      ${generateManager(teamData.manager)}
      ${generateEngineers(teamData.teamMembers)}
      ${generateInterns(teamData.teamMembers)}
    </div>
  </body>
</html>`;
};
