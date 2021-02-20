// Create Cards
const cards = data => {
 
  const generateEmployee = data.employees.map(function(i) {
      return `
      <div class = "d-flex justify-content-center">
      <div class="card" style="width: 18rem;">
          <div class="bg-primary text-white">
            <h5 class='card-title'><i class="bi bi-pen"></i>${i.name}</h5>
            <h6><ion-icon name="accessibility"></ion-icon>${i.type}</h6>
          </div>
        <div class="card-body">
          <p class="card-text">ID: ${i.id}</p>
          <p class="card-text">Email: <a href="mailto:${i.email}">${i.email}</a></p>
        </div>
      </div>
      `           
  }).join('');
  
  return generateEmployee
  
}
  


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
    
    ${cards(templateData)}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </body>
    </html>
    `;
    
}
