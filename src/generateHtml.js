const fs = require('fs')


const writeToFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if error reject promise and send error to promise catch
            if(err) {
                reject(err);
                // return out of the function
                return;
            }

            //  if everything is good resolve promise
            resolve({
                ok: true,
                message: 'Your organizational chart was Created!'
            });
        });
    });
};


module.exports = writeToFile 


  
