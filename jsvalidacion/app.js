
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
