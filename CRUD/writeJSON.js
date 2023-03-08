const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'tasksData.json')

function write (array) {
    const arrayParsed = JSON.stringify(array, null, 2);
    fs.writeFileSync(filePath, arrayParsed);
}

module.exports = write;