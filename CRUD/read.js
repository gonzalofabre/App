const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'..','tasksData.json')


const data = fs.readFileSync(filePath, 'utf-8')

const dataParsed = JSON.parse(data)

function read () {
return dataParsed
}

module.exports = read;

