
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

    //Validación info de equipo
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
                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
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

                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }
    
    //Validación lider de equipo
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

                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
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
                
                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }

            else if(data === 'Ingrese un número de 10 dígitos'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                error5.innerHTML = `
                ${data}
                `
                inputtel.style.border = '2px solid red'

                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
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

                error6.innerHTML = `
                ${data}
                `
                inputcorreo.style.border = '2px solid red'

                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }   

            else if(data === 'Ingrese el correo de la forma ejemplo@gmail.com'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `

                error6.innerHTML = `
                ${data}
                `
                inputcorreo.style.border = '2px solid red'

                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }

            else if(data === 'Ingrese la carrera del lider de equipo'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `

                error7.innerHTML = `
                ${data}
                `
                inputcali.style.border = '2px solid red'
                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }

    //Info integrante 2.
            
            else if(data === 'Ingrese el nombre del segundo integrante' || data === 'Ingrese el apellido del segundo integrante' || data === 'Ingrese la carrera del segundo integrante'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `

                if(data === 'Ingrese el nombre del segundo integrante'){
                    error8.innerHTML = `
                    ${data}
                    `
                    inputnom2.style.border = '2px solid red'
                }

                else if(data === 'Ingrese el apellido del segundo integrante'){
                    error9.innerHTML = `
                    ${data}
                    `
                    inputap2.style.border = '2px solid red'
                }

                else if(data === 'Ingrese la carrera del segundo integrante'){
                    error10.innerHTML = `
                    ${data}
                    `
                    inputca2.style.border = '2px solid red'
                }

                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
                
            }

    //Info integrante 3.
            else if(data === 'Ingrese el nombre del tercer integrante' || data === 'Ingrese el apellido del tercer integrante' || data === 'Ingrese la carrera del tercer integrante'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                if(data === 'Ingrese el nombre del tercer integrante'){
                    error11.innerHTML = `
                    ${data}
                    `
                    inputnom3.style.border = '2px solid red'
                }

                else if(data === 'Ingrese el apellido del tercer integrante'){
                    error12.innerHTML = `
                    ${data}
                    `
                    inputap3.style.border = '2px solid red'
                }

                else if(data === 'Ingrese la carrera del tercer integrante'){
                    error13.innerHTML = `
                    ${data}
                    `
                    inputca3.style.border = '2px solid red'
                }

                 //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
                
            }

    //Info integrante 3.
            else if(data === 'Ingrese el nombre del cuarto integrante' || data === 'Ingrese el apellido del cuarto integrante' || data === 'Ingrese la carrera del cuarto integrante'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                if(data === 'Ingrese el nombre del cuarto integrante'){
                    error14.innerHTML = `
                    ${data}
                    `
                    inputnom4.style.border = '2px solid red'
                }

                else if(data === 'Ingrese el apellido del cuarto integrante'){
                    error15.innerHTML = `
                    ${data}
                    `
                    inputap4.style.border = '2px solid red'
                }

                else if(data === 'Ingrese la carrera del cuarto integrante'){
                    error16.innerHTML = `
                    ${data}
                    `
                    inputca4.style.border = '2px solid red'
                }

                 //Alerta de error.
                 Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }

            else if(data === 'Se ha registrado correctamente!!'){
                respuesta.innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${data}
                </div>
                `
                 //Alerta de error.
                 Swal.fire({
                    icon: 'success',
                    title: 'Registro Completado!',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }

            else if(data === 'Ya existe ese nombre de equipo!!')
            {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }
            //Si no se ingreso nada...
            else
            {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    timer: 3000,
                    timerProgressVar: true,
                    allowOutsideClick: true
                })
            }
        })
})
