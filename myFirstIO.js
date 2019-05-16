const fs = require('fs')

try {
    const contents = fs.readFileSync("./pathIOFile/prueba.txt")
    const lines = contents.toString().split('\n').length;
    console.log(lines);
} catch (err) {
    console.log(err);
}
