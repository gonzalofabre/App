const read = require('./read');
const write = require('./writeJSON');

function remove (title) {
    let data = read();
    let newData = [];
    let deletedObject;
    for(i=0; i<data.length; i++) {
    //     if(title === data[i].title) {
    //         data.splice(i, 1)
            
    //         write(data)
    //         return 'ok'
    //     }
        if(data[i].title !== title) {
        newData.push(data[i])
        }
        if (data[i].title === title) {
            deletedObject = data[i];
         }
     }



     if(newData.length !== data.length) {
        write(newData)
        return console.log('\nok\n\n'+'Elemento eliminado: '+ JSON.stringify(deletedObject)+'\n')
     } 


    return console.log('\nTitulo no encontrado\n')
}



module.exports = remove;
