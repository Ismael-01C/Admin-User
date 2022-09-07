async function eliminarUsuario(id){
    if (!confirm("¿Desea eliminar este usuario?")){
        return;
    }
    const endpoint = "https://appgizlorecords.herokuapp.com/api/es/usuario/v1/"+id
    const options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    const request = await fetch(endpoint, options);
    console.log(request)
    location.reload();
}