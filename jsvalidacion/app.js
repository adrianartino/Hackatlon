
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

            if(data === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
            }
            else
            {
                respuesta.innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${data}
                </div>
                `
            }
        })
})
