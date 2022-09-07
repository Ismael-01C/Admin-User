async function createUser() {
    let obj = {};
    obj.nombreCompleto = document.getElementById('NombreTxt').value
    obj.email = document.getElementById('EmailTxt').value
    obj.estado = document.getElementById('EstadoTxt').value
    obj.contrasenia = document.getElementById('PasswordTxt').value

    if (obj.nombreCompleto != "" && obj.email != "" && obj.estado != "" && obj.contrasenia != "") {
        const res = await fetch('https://appgizlorecords.herokuapp.com/api/es/usuario/v1', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (res.status >= 300) {
            alert("Error al registrar el usuario, por favor intentelo mas tarde:)")
        }
        alert("El usuario fue registrado con exito!")
        location.reload();
    } else {
        alert("Por favor debe llenar los campos!")
    }
}