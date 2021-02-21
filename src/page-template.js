// Create Cards
const managerCards = data => {
  if(!data.mangers === undefined){
    return ''
  };
  
  const generateManager = data.managers.map(function(i) {
      return `     

    <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header bg-danger">
       <h5 class="card-title">${i.name}</h5>
       <h6 class="card-subtitle mb-2"><ion-icon name="cafe"></ion-icon>${i.type}</h6>
    </div>
    <div class="card-body bg-light">
       <p class="card-text">ID: ${i.id}</p>
       <p class="card-text">Email: <a href="mailto:${i.email}">${i.email}</a></p>
       <p class="card-text">Office Phone: ${i.officeNumber}</p>      
    </div>
    </div>              
      `;           
  }).join('');

  return generateManager
};  
  
const engineerCards = data=> {
  if(!data.engineers === undefined){
    return ''
  }
  const generateEngineer = data.engineers.map(function(i) {
    console.log(i.name);
      return `   
      <div class="card mb-3" style="max-width: 18rem;">
      <div class="card-header text-white bg-success">
         <h5 class="card-title">${i.name}</h5>
         <h6 class="card-subtitle mb-2"><ion-icon name="calculator"></ion-icon>${i.type}</h6>
      </div>
      <div class="card-body bg-light">
         <p class="card-text">ID: ${i.id}</p>
         <p class="card-text">Email: <a href="mailto:${i.email}">${i.email}</a></p>
         <p class="card-text">GitHib Account: <a href="https://github.com/${i.github}">${i.github}</a></p>    
      </div>
      </div>
      `;   
      
  }).join('');
  return generateEngineer
};

const employeeCards = data=> {
  if(!data.employees=== undefined){
    return ''
  }
  const generateEmployee = data.employees.map(function(i) {
      return `
      <div class="card mb-3" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary">
         <h5 class="card-title">${i.name}</h5>
         <h6 class="card-subtitle mb-2"><ion-icon name="accessibility"></ion-icon>${i.type}</h6>
      </div>
      <div class="card-body bg-light">
          <p class="card-text">ID: ${i.id}</p>
          <p class="card-text">Email: <a href="mailto:${i.email}">${i.email}</a></p>
      </div>
      </div>    
      `;           
  }).join('');
  return generateEmployee
};

const internCards = data=> {
  if(!data.interns === undefined){
    return ''
  }
  const generateIntern = data.interns.map(function(i) {
      return `      
      <div class="card mb-3" style="max-width: 18rem;">
      <div class="card-header bg-warning">
         <h5 class="card-title">${i.name}</h5>
         <h6 class="card-subtitle mb-2"><ion-icon name="school"></ion-icon>${i.type}</h6>
      </div>
      <div class="card-body bg-light">
          <p class="card-text">ID: ${i.id}</p>
          <p class="card-text">Email: <a href="mailto:${i.email}">${i.email}</a></p>
          <p class="card-text">School:${i.school}</p>
      </div>
      </div> 
      `           
  }).join('');
  return generateIntern
};

module.exports =  templateData => { 
   
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
      <title>Team Generator</title>
    </head>  
    <body>
    <header>    
    <nav class="navbar navbar-primary bg-primary text-white">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1" text-align="center">Team Generator</span>
      </div>
    </nav>
    </header>
      <div class='container'>

        <section class="d-flex flex-row justify-content-center m-1">                  
          ${managerCards(templateData)} 
        </section>

        <section class="d-flex flex-row justify-content-center m-1"> 
          ${engineerCards(templateData)} 
        </section> 

        <section class="d-flex flex-row justify-content-center m-1">        
          ${employeeCards(templateData)}
        </section> 

        <section class="d-flex flex-row justify-content-center m-1">   
        ${internCards(templateData)}
        </section>

       
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </body>
    </html>
    `;
    
}
