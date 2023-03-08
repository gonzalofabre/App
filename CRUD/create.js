
const read = require('./read');
const write = require('./writeJSON');

function create (newTitle, newDesc) {
    let newObject = {
        title: newTitle,
        desc: newDesc}
    let data = read();
        data.push(newObject)
    write(data);

    console.log('\nNuevo elemento creado '+ JSON.stringify(newObject)+'\n');


}




module.exports = create;

