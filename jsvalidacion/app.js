//validación de registro.
var formulario = document.getElementById('formularioregistro');
var respuesta = document.getElementById('respuesta');


//detectar cuando el usuario de clic al botón.
formulario.addEventListener('submit', function(e) {
    

    e.preventDefault(); //pervenir recargar la pagina.
    //console.log('me diste un click xd');

    var datos = new FormData(formulario);

    //Mandar datos a PHP.
    fetch('php/validacion.php', { //fetch a la validación
            method: 'POST', //Se envia todo con el método post
            body: datos //Se envian los datos
        })
        .then(res => res.json()) //respuesta json 
        .then(data => { //respuesta almacenada en data.
            console.log(data) //Imprimir data.

            //Bloqueo de boton hasta que se cumpla una condicion se habilita.
            boton = document.getElementById('botonreg');
            boton.setAttribute('disabled', "true");

            //Muestra de que está validando datos. Cuando se cumple una condicion, desaparece.
            divregistro = document.getElementById('divregistro');
            divregistro.style.display = "block";
            
            //Validación info de equipo
            if (data === 'No se ha ingresado el nombre del equipo') {



                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none"; //Oculta el cargando datos
                error1.innerHTML = `
                ${data}
                `
                inputequipo.style.border = '2px solid red';

                //Limpiar otros errores
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';
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
            } else if (data === 'No se ha ingresado la institución') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error2.innerHTML = `
                ${data}
                `
                inputinst.style.border = '2px solid red';

                //Limpiar otros errores
                error1.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';

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
            else if (data === 'No ha ingresado el nombre del lider de equipo') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error3.innerHTML = `
                ${data}
                `
                inputnl.style.border = '2px solid red';

                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';

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
            } else if (data === 'No ha ingresado el apellido del lider de equipo') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error4.innerHTML = `
                ${data}
                `
                inputal.style.border = '2px solid red'

                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';

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
            } else if (data === 'Ingrese un número de 10 dígitos') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error5.innerHTML = `
                ${data}
                `
                inputtel.style.border = '2px solid red'

                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';

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
            } else if (data === 'El teléfono está correcto') {
                respuesta.innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";

            } else if (data === 'No ha ingresado el correo electrónico') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error6.innerHTML = `
                ${data}
                `
                inputcorreo.style.border = '2px solid red'

                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';
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
            } else if (data === 'Ingrese el correo de la forma ejemplo@gmail.com') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error6.innerHTML = `
                ${data}
                `
                inputcorreo.style.border = '2px solid red'

                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';

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
            } else if (data === 'Ingrese la carrera del lider de equipo') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error7.innerHTML = `
                ${data}
                `
                inputcali.style.border = '2px solid red'

                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';
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
            else if (data === 'Ingrese el nombre del segundo integrante' || data === 'Ingrese el apellido del segundo integrante' || data === 'Ingrese la carrera del segundo integrante') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                if (data === 'Ingrese el nombre del segundo integrante') {
                    error8.innerHTML = `
                    ${data}
                    `
                    inputnom2.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error9.innerHTML = ``
                    error10.innerHTML = ``
                    error11.innerHTML = ``
                    error12.innerHTML = ``
                    error13.innerHTML = ``
                    error14.innerHTML = ``
                    error15.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
                } else if (data === 'Ingrese el apellido del segundo integrante') {
                    error9.innerHTML = `
                    ${data}
                    `
                    inputap2.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error10.innerHTML = ``
                    error11.innerHTML = ``
                    error12.innerHTML = ``
                    error13.innerHTML = ``
                    error14.innerHTML = ``
                    error15.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
                } else if (data === 'Ingrese la carrera del segundo integrante') {
                    error10.innerHTML = `
                    ${data}
                    `
                    inputca2.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error9.innerHTML = ``
                    error11.innerHTML = ``
                    error12.innerHTML = ``
                    error13.innerHTML = ``
                    error14.innerHTML = ``
                    error15.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
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
            else if (data === 'Ingrese el nombre del tercer integrante' || data === 'Ingrese el apellido del tercer integrante' || data === 'Ingrese la carrera del tercer integrante') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                if (data === 'Ingrese el nombre del tercer integrante') {
                    error11.innerHTML = `
                    ${data}
                    `
                    inputnom3.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error9.innerHTML = ``
                    error10.innerHTML = ``
                    error12.innerHTML = ``
                    error13.innerHTML = ``
                    error14.innerHTML = ``
                    error15.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
                } else if (data === 'Ingrese el apellido del tercer integrante') {
                    error12.innerHTML = `
                    ${data}
                    `
                    inputap3.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error9.innerHTML = ``
                    error10.innerHTML = ``
                    error11.innerHTML = ``
                    error13.innerHTML = ``
                    error14.innerHTML = ``
                    error15.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
                } else if (data === 'Ingrese la carrera del tercer integrante') {
                    error13.innerHTML = `
                    ${data}
                    `
                    inputca3.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error9.innerHTML = ``
                    error10.innerHTML = ``
                    error11.innerHTML = ``
                    error12.innerHTML = ``
                    error14.innerHTML = ``
                    error15.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
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
            else if (data === 'Ingrese el nombre del cuarto integrante' || data === 'Ingrese el apellido del cuarto integrante' || data === 'Ingrese la carrera del cuarto integrante') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                if (data === 'Ingrese el nombre del cuarto integrante') {
                    error14.innerHTML = `
                    ${data}
                    `
                    inputnom4.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error9.innerHTML = ``
                    error10.innerHTML = ``
                    error11.innerHTML = ``
                    error12.innerHTML = ``
                    error13.innerHTML = ``
                    error15.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
                } else if (data === 'Ingrese el apellido del cuarto integrante') {
                    error15.innerHTML = `
                    ${data}
                    `
                    inputap4.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error9.innerHTML = ``
                    error10.innerHTML = ``
                    error11.innerHTML = ``
                    error12.innerHTML = ``
                    error13.innerHTML = ``
                    error14.innerHTML = ``
                    error16.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputca4.style.border = '1px solid gray';
                } else if (data === 'Ingrese la carrera del cuarto integrante') {
                    error16.innerHTML = `
                    ${data}
                    `
                    inputca4.style.border = '2px solid red'

                    //Limpiar otros errores
                    error1.innerHTML = ``
                    error2.innerHTML = ``
                    error3.innerHTML = ``
                    error4.innerHTML = ``
                    error5.innerHTML = ``
                    error6.innerHTML = ``
                    error7.innerHTML = ``
                    error8.innerHTML = ``
                    error9.innerHTML = ``
                    error10.innerHTML = ``
                    error11.innerHTML = ``
                    error12.innerHTML = ``
                    error13.innerHTML = ``
                    error14.innerHTML = ``
                    error15.innerHTML = ``

                    inputequipo.style.border = '1px solid gray';
                    inputinst.style.border = '1px solid gray';
                    inputnl.style.border = '1px solid gray';
                    inputal.style.border = '1px solid gray';
                    inputtel.style.border = '1px solid gray';
                    inputcorreo.style.border = '1px solid gray';
                    inputcali.style.border = '1px solid gray';
                    inputnom2.style.border = '1px solid gray';
                    inputap2.style.border = '1px solid gray';
                    inputca2.style.border = '1px solid gray';
                    inputnom3.style.border = '1px solid gray';
                    inputap3.style.border = '1px solid gray';
                    inputca3.style.border = '1px solid gray';
                    inputnom4.style.border = '1px solid gray';
                    inputap4.style.border = '1px solid gray';
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
            } else if (data === 'Se ha registrado correctamente!!') {
                respuesta.innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';
                //Alerta de error.
                Swal.fire({
                    icon: 'success',
                    title: 'Registro Completado!',
                    text: data,
                    text: 'Te enviamos un correo con toda la información!',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    allowOutsideClick: true
                })
            } else if (data === 'Error en la base de datos!!') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';

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
            } else if (data === 'Error en el servidor de correos!!') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';
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
            } else if (data === 'Ya existe el nombre de equipo!') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                error1.innerHTML = `
                ${data}
                `
                inputequipo.style.border = '2px solid red';

                //Limpiar otros errores
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';

                //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    allowOutsideClick: true
                })
            } else if (data === 'Un integrante del equipo ya forma parte de un equipo existente!') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
                //Limpiar otros errores
                error1.innerHTML = ``
                error2.innerHTML = ``
                error3.innerHTML = ``
                error4.innerHTML = ``
                error5.innerHTML = ``
                error6.innerHTML = ``
                error7.innerHTML = ``
                error8.innerHTML = ``
                error9.innerHTML = ``
                error10.innerHTML = ``
                error11.innerHTML = ``
                error12.innerHTML = ``
                error13.innerHTML = ``
                error14.innerHTML = ``
                error15.innerHTML = ``
                error16.innerHTML = ``

                inputequipo.style.border = '1px solid gray';
                inputinst.style.border = '1px solid gray';
                inputnl.style.border = '1px solid gray';
                inputal.style.border = '1px solid gray';
                inputtel.style.border = '1px solid gray';
                inputcorreo.style.border = '1px solid gray';
                inputcali.style.border = '1px solid gray';
                inputnom2.style.border = '1px solid gray';
                inputap2.style.border = '1px solid gray';
                inputca2.style.border = '1px solid gray';
                inputnom3.style.border = '1px solid gray';
                inputap3.style.border = '1px solid gray';
                inputca3.style.border = '1px solid gray';
                inputnom4.style.border = '1px solid gray';
                inputap4.style.border = '1px solid gray';
                inputca4.style.border = '1px solid gray';
                //Alerta de error.
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! Algo salió mal):',
                    text: data,
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#b82c54',
                    footer: '<span class= "foorojo">Hackaton 2020</span>',
                    allowOutsideClick: true
                })
            }else if (data === 'Faltan datos por ingresar!') {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";

                //No limpia errores.
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
            else {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${data}
                </div>
                `
                boton.removeAttribute('disabled');
                divregistro.style.display = "none";
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