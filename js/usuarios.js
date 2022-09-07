$(document).ready(
    function(){
        loadUser();
    }
);


async function loadUser(){
    const options = {
        method: 'GET',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }};
    const endpoint = 'https://appgizlorecords.herokuapp.com/api/es/usuario/empresa/v1/1'

    const request = await fetch(endpoint, options);
    const listaUsuarios = await request.json();

    let listadoHtml = '';
    for(let usuario of listaUsuarios){
        let btnActualizarModal = `<button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#btnActualizar">✏️</button>`
        let btnEliminar =`<button type="button" class="btn btn-outline-danger m-2" onclick="deleteUser(` + `'` + usuario.id + `'`+`)">🗑️</button>`
         let usuarioHtml = '<tr><td id="tdID" ' + usuario.id + '>' + usuario.id
            + '</td><td>' + usuario.nombreCompleto + '</td><td>' + usuario.estado
            + '</td><td>' + usuario.email + '</td><td>' + usuario.contrasenia
            + '</td><td>'+ btnActualizarModal + btnEliminar +'</td></tr>';
        listadoHtml += usuarioHtml;
    }
    document.querySelector('#usuarios tbody').outerHTML = listadoHtml;
}