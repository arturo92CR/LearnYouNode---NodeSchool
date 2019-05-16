const fs = require('fs');
const filePath = "./pathIOFile/prueba.txt";

try {
    fs.readFile(filePath, function callback(error, data) {
        if (error) {
            return console.log(error)
        }
        // fs.readFile(file, 'utf8', callback) can also be used
        const lines = data.toString().split('\n').length;
        console.log(lines)
    });
} catch (error) {
    console.log(error);
}