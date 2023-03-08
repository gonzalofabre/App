const add = require('./CRUD/create.js');
const remove = require('./CRUD/delete');
const list = require('./CRUD/list');
const edit = require('./CRUD/update');
const read = require('./CRUD/read');

const command = process.argv[2];
const param1 = process.argv[3];
const param2 = process.argv[4];

const fail = () => console.log('Debe ingresar argumentos válidos, para más info escriba en la terminal lo siguiente: \n node app.js list');

switch (command) {
    case "add":
        if((param1 && param2) && !process.argv[5]){
            add(param1, param2);
        } else {
            fail();
        };
        break;
    case "delete":
        if(param1){
        remove(param1);
        } else {
            fail();
        };
        break;
    case "list":
        list();
        break;
    case "edit":
        if((param1 && param2) && !process.argv[5]) {
        edit(param1, param2);
        } else {
            fail();
        };
        break;
    case "read":
        console.log(read());
        break;


    default:
        console.log('Ingrese un comando válido, para más información escriba en la terminal "node app.js list"');
        break;
}