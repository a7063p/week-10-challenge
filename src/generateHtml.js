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
                message: 'File Created!'
            });
        });
    });
};

// const copyFile = () => {
//     return new Promise((resolve, reject) => {
//         fs.copyFile('./src/style.css', './dist/style.css', err => {  
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve({
//                 ok: true,
//                 message: 'CSS File Created'
//             });
//         });
//     });
//};

module.exports = writeToFile 


  
