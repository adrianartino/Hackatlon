
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

        elseif($institucion == ''){
            echo json_encode('No se ha ingresado la institución');
        }

        //Si ingreso todo bien
        else{
            echo json_encode('Se ingreso algo!!');
        }   
        
    }
?>