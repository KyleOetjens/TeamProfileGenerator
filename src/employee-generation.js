function buildManager(teamManager) {
    const managerCard =`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title" id = "empName">${teamManager.getName()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${teamManager.getId()}</li>
    <li class="list-group-item">Email:<span><a href="mailto:${teamManager.getEmail()}">${teamManager.getEmail()}</a></span></li>
    <li class="list-group-item">Office Number: ${teamManager.officeNumber}</li>
  </ul>
</div>`
return managerCard
}

function buildEngineers(engineers){
  let engineerCards =``
  for (let i = 0; i < engineers.length; i++) {
    let engineer = engineers[i];
    let card =`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title" id = "empName">${engineer.getName()} </h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email:<span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
    <li class="list-group-item">github username: <span><a href="https://www.github.com/${engineer.getGitHub()}"  target="_blank">${engineer.getGitHub()}</a></span></li>
  </ul>
</div>`
engineerCards += card
  }
return engineerCards

}

function buildInterns(interns){
  let internCards = ``
  for (let index = 0; index < interns.length; index++) {
    let intern = interns[index];
    let card =
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title" id= "empName">${intern.getName()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email:<span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span></li>
    <li class="list-group-item">School: <span>${intern.getSchool()}</span></li>
    
  </ul>
</div>`
internCards += card
  }
return internCards

}
function buildTeam(managerCard,engineerCards,internCards){
  const teamPage = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body>
  <header>
      <h1 class = 'pagetitle'>Team Profile</h1>
  </header>
  <main class = 'align-items-start'>
      <section class = 'manager'>
  ${managerCard}
      </section>
      <section class = 'engineer'>
  ${engineerCards}
      </section>
      <section class = 'intern'>
  ${internCards}
      </section>
  </main>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
  </html>`
  return teamPage
}
module.exports ={buildManager,buildEngineers,buildInterns,buildTeam}
