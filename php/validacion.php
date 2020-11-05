
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
    $nomtercero = $_POST['nom2'];
    $aptercero = $_POST['ap2'];
    $catercero = $_POST['ca2'];

    //variables cuarto integrante
    $nomcuarto = $_POST['nom2'];
    $apcuarto = $_POST['ap2'];
    $cacuarto = $_POST['ca2'];

    //Arreglo para errores
    $errores = "";

    if ($equipo === ''){
        $errores = "No ha ingresado el nombre";
    }

    if ($errores != ''){
        echo json_encode('error');
    }
    else{
        echo json_encode('Se ingreso el equipo:' .$equipo. '!!');
    }
?>