function list () {
    console.log(
        "\n>> add: Crea un elemento nuevo dentro de la lista utilizando ni más ni menos de 2 argumentos: 'nuevo título' y 'nueva descripción': \n \tnode app.js add 'nuevotitulo' 'nuevadescripción'\n"+
        "---------------------\n"+
        ">> delete: Elimina un elemento dentro de la lista según el título ingresado:\n \tnode app.js delete 'tituloAEliminar'\n"+
        "---------------------\n"+
        ">> edit: Edita la descripción de un elemento dentro de la lista utilizando ni más ni menos de 2 argumentos: 'titulo a editar' y 'Nueva Descripción':\n \tnode app.js edit 'tituloAEditar' 'nuevaDescripción'\n"+
        "---------------------\n"+
        ">>list: Brinda información acerca de los comandos: \n \tnode app.js list\n"+
        "---------------------\n"+
        ">>read: Muestra el contenido de la lista: \n \tnode app.js read\n"+
        "---------------------"


    );
};

module.exports = list