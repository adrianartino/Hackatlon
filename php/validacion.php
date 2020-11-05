
<?php 


    //variables equipo
    $equipo = $_POST['equipo'];
    $institucion = $_POST['ins'];

    //variables lider
    $nombreLider = $_POST['nomlid'];
    $apellidoLider = $_POST['aplid'];
    $telefono = $_POST['tellid'];
    $correo = $_POST['colid'];
    $carreraLider = $_POST['calid'];

    //variables segundo integrante
    $nomsegundo = $_POST['nom2'];
    $apsegundo = $_POST['ap2'];
    $casegundo = $_POST['ca2'];

    //variables tercer integrante
    $nomtercero = $_POST['nom3'];
    $aptercero = $_POST['ap3'];
    $catercero = $_POST['ca3'];

    //variables cuarto integrante
    $nomcuarto = $_POST['nom4'];
    $apcuarto = $_POST['ap4'];
    $cacuarto = $_POST['ca4'];

    $telefonobien = FALSE;
    $telefonoingresado = FALSE;
    $correobien = FALSE;

    //si el correo está bien...
    if(filter_var($correo, FILTER_VALIDATE_EMAIL)){
        $correobien = TRUE;
    }
    else{
        $correobien = FALSE;
    }
    

    //Validación si no se han ingresado datos.
    if ($equipo === '' && $institucion === '' 
    && $nombreLider === '' && $apellidoLider === '' && $telefono === '' && $correo === '' && $carreraLider == '' 
    && $nomsegundo === '' && $apsegundo === '' && $casegundo === '' 
    && $nomtercero === '' && $aptercero === '' && $catercero === '' 
    && $nomcuarto === '' && $apcuarto === '' && $cacuarto === ''){
        echo json_encode('No se han ingresado datos');
    }
    
    //Si ingreso datos..
    else{

        //Si le falto ingresar el nombre del equipo...
        if($equipo === ''){
            echo json_encode('No se ha ingresado el nombre del equipo');
        }

        //Si le falto ingresar el nombre de la institución...
        elseif($institucion == ''){
            echo json_encode('No se ha ingresado la institución');
        }

        //Si le falto ingresar el nombre del lider...
        elseif($nombreLider == ''){
            echo json_encode('No ha ingresado el nombre del lider de equipo');
        }

        //Si le falto ingresar el apellido del lider...
        elseif($apellidoLider == ''){
            echo json_encode('No ha ingresado el apellido del lider de equipo');
        }

        //Si ingreso el telefono..
        elseif($telefono != ''){
            //variable para contar la longitud de teléfono.
            $long = strlen($telefono);

            //Si el numero es menor a 10 digitos..
            if ($long < 10){
                $telefonobien = FALSE;
                echo json_encode('Ingrese un número de 10 dígitos');
            }

            //si tiene los 10 digitos...
            else{
                $telefonobien = TRUE;
            }
        }

        //Si no ingresa el teléfono
        elseif($telefono == ''){
            //SE INDICA QUE DE TODAS FORMAS SE PUEDE INSCRIBIR, SOLO HABRA ERROR SI
            //EL NUMERO ES MENOR A 10 DIGITOS
            $telefonobien = TRUE;
        }

        //si los datos son correctos y no se ingreso teléfono, se registra aun así sin teléfono.
        else{
            echo json_encode('Se ingreso algo!!');
        }
    }

    //Si los datos son correctos y se ingreso teléfono de 10 digitos, se registra..
    if($telefonobien == TRUE ){
        //si el correo esta vacio..
        if($correo == ''){
            echo json_encode('No ha ingresado el correo electrónico');
        }

        //si el correo ingresado está mal...
        elseif($correobien == FALSE){
            echo json_encode('Ingrese el correo de la forma ejemplo@gmail.com');
        }
        
        //Si no ha ingresado la carrera del lider de equipo
        elseif($carreraLider == ''){
            echo json_encode('Ingrese la carrera del lider de equipo');
        }

        //Si no ha ingresado el nombre del segundo integrante
        elseif($nomsegundo == ''){
            echo json_encode('Ingrese el nombre del segundo integrante');
        }

        //Si no ha ingresado el apellido del segundo integrante
        elseif($apsegundo == ''){
            echo json_encode('Ingrese el apellido del segundo integrante');
        }

        //Si no ha ingresado la carrera del segundo integrante
        elseif($casegundo == ''){
            echo json_encode('Ingrese la carrera del segundo integrante');
        }

        //Si no ha ingresado el nombre del tercer integrante
        elseif($nomtercero == ''){
            echo json_encode('Ingrese el nombre del tercer integrante');
        }

        //Si no ha ingresado el apellido del tercero integrante
        elseif($aptercero == ''){
            echo json_encode('Ingrese el apellido del tercer integrante');
        }

        //Si no ha ingresado la carrera del tercer integrante
        elseif($catercero == ''){
            echo json_encode('Ingrese la carrera del tercer integrante');
        }

        //Si no ha ingresado el nombre del cuarto integrante
        elseif($nomcuarto == ''){
            echo json_encode('Ingrese el nombre del cuarto integrante');
        }

        //Si no ha ingresado el apellido del cuarto integrante
        elseif($apcuarto == ''){
            echo json_encode('Ingrese el apellido del cuarto integrante');
        }

        //Si no ha ingresado la carrera del cuarto integrante
        elseif($cacuarto == ''){
            echo json_encode('Ingrese la carrera del cuarto integrante');
        }

        else{
            echo json_encode('Se ha registrado correctamente!!');
        }
    }

?>