const read = require('./read');
const write = require('./writeJSON');

function update (title, newDesc) {
    const data = read()
    for(i=0; i<data.length; i++){
        if (title === data[i].title) {
            data[i].desc = newDesc
            write(data)
            return console.log('\nok\n \nElemento editado exitosamente: '+ JSON.stringify(data[i])+'\n');
        }
    }
    return console.log('\nTítulo no encontrado\n')
}

module.exports = update;