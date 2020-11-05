
//validación de registro.

var formulario = document.getElementById('formularioregistro');
var respuesta = document.getElementById('respuesta');

//detectar cuando el usuario de clic al botón.
formulario.addEventListener('submit', function(e){

    e.preventDefault(); //pervenir recargar la pagina.
    console.log('me diste un click xd');

    var datos = new FormData(formulario);

    //Mandar datos a PHP.
    fetch('php/validacion.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)

            //Validación si no ingresa el nombre
            if(data === 'No se ha ingresado el nombre del equipo'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                error1.innerHTML = `
                ${data}
                `
                inputequipo.style.border = '2px solid red';
            }

            //Validación si no ingresa la institución.
            else if(data === 'No se ha ingresado la institución'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                error2.innerHTML = `
                ${data}
                `
                inputinst.style.border = '2px solid red';
            }

            else if(data === 'No ha ingresado el nombre del lider de equipo'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                error3.innerHTML = `
                ${data}
                `
                inputnl.style.border = '2px solid red';
            }

            else if(data === 'No ha ingresado el apellido del lider de equipo'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                error4.innerHTML = `
                ${data}
                `
                inputal.style.border = '2px solid red'
            }

            else if(data === 'Ingrese un número de 10 dígitos'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
            }

            else if(data === 'El teléfono está correcto'){
                respuesta.innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${data}
                </div>
                `
            }

            else if(data === 'No ha ingresado el correo electrónico'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
            }   

            else if(data === 'Ingrese el correo de la forma ejemplo@gmail.com'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
            }

            else if(data === 'Ingrese la carrera del lider de equipo'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
            }

            else if(data === 'Se ingreso algo!!'){
                respuesta.innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${data}
                </div>
                `
            }

            //Si no se ingreso nada...
            else
            {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
            }
        })
})
