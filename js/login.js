document.getElementById("Login").addEventListener("click", loginAPI);

async function loginAPI(){

    const email = document.getElementById('EmailTxt').value;
    const password = document.getElementById('PasswordTxt').value;
    const divError = document.getElementById('divError')
    if(email == '' || password == ''){
        divError.setAttribute("class", "alert alert-danger")
        divError.setAttribute("role", "alert")
        divError.innerHTML = "Error debe llenar los campos"
        return;
    }

    const endpoint = 'https://appgizlorecords.herokuapp.com/api/es/usuario/v1/'+email+'/'+password
    const options = {method: 'GET'};


    const res = await fetch(endpoint, options);
    const data = await res.json();


    if (res.status !== 200){
        divError.setAttribute("class", "alert alert-danger")
        divError.setAttribute("role", "alert")
        divError.innerHTML = "Error credenciales incorrectas, status: "+res.status
        return;
    } else if(res.status == 200){
        alert("El usuario "+data.nombreCompleto+" ha iniciado sesion correctamente!")
        window.location.href = 'html/usuarios.html'
    }
        
}
