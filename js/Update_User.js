function getID(){
    let id = document.getElementById('tdID').textContent
    updateUser(id)
}

async function updateUser(id){
    let obj = {};
    obj.id = id;
    obj.nombreCompleto = document.getElementById('NombreTxtUpdate').value
    obj.email = document.getElementById('EmailTxtUpdate').value
    obj.estado = document.getElementById('EstadoTxtUpdate').value
    obj.contrasenia = document.getElementById('PasswordTxtUpdate').value

    if (obj.nombreCompleto != "" && obj.email != "" && obj.estado != "" && obj.contrasenia != "") {
        const res = await fetch('https://appgizlorecords.herokuapp.com/api/es/usuario/v1', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (res.status >= 300) {
            alert("Error al actualizar el usuario")
        }
        alert("El usuario fue actualizado")
        location.reload();
    } else {
        alert("Debe llenar los campos")
    }
}


