
<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/Exception.php';
    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/SMTP.php';

    $mail = new PHPMailer(true);


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
    $registrado = FALSE;

    //si el correo está bien...
    if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $correobien = TRUE;
    } else {
        $correobien = FALSE;
    }



    //Validación si no se han ingresado datos.
    if (
        $equipo === '' && $institucion === ''
        && $nombreLider === '' && $apellidoLider === '' && $telefono === '' && $correo === '' && $carreraLider == ''
        && $nomsegundo === '' && $apsegundo === '' && $casegundo === ''
        && $nomtercero === '' && $aptercero === '' && $catercero === ''
        && $nomcuarto === '' && $apcuarto === '' && $cacuarto === ''
    ) {
        echo json_encode('No se han ingresado datos');
    }

    //Si ingreso datos..
    else {

        //Si le falto ingresar el nombre del equipo...
        if ($equipo === '') {
            echo json_encode('No se ha ingresado el nombre del equipo');
        }

        //Si le falto ingresar el nombre de la institución...
        elseif ($institucion == '') {
            echo json_encode('No se ha ingresado la institución');
        }

        //Si le falto ingresar el nombre del lider...
        elseif ($nombreLider == '') {
            echo json_encode('No ha ingresado el nombre del lider de equipo');
        }

        //Si le falto ingresar el apellido del lider...
        elseif ($apellidoLider == '') {
            echo json_encode('No ha ingresado el apellido del lider de equipo');
        }

        //Si ingreso el telefono..
        elseif ($telefono != '') {
            //variable para contar la longitud de teléfono.
            $long = strlen($telefono);

            //Si el numero es menor a 10 digitos..
            if ($long < 10) {
                $telefonobien = FALSE;
                echo json_encode('Ingrese un número de 10 dígitos');
            }

            //si tiene los 10 digitos...
            else {
                $telefonobien = TRUE;
            }
        }

        //Si no ingresa el teléfono
        elseif ($telefono == '') {
            //SE INDICA QUE DE TODAS FORMAS SE PUEDE INSCRIBIR, SOLO HABRA ERROR SI
            //EL NUMERO ES MENOR A 10 DIGITOS
            $telefonobien = TRUE;
        }

        //si los datos son correctos y no se ingreso teléfono, se registra aun así sin teléfono.
        else {
            echo json_encode('Se ingreso algo!!');
        }
    }

    //Si los datos son correctos y se ingreso teléfono de 10 digitos, se registra..
    if ($telefonobien == TRUE) {
        //si el correo esta vacio..
        if ($correo == '') {
            echo json_encode('No ha ingresado el correo electrónico');
        }

        //si el correo ingresado está mal...
        elseif ($correobien == FALSE) {
            echo json_encode('Ingrese el correo de la forma ejemplo@gmail.com');
        }

        //Si no ha ingresado la carrera del lider de equipo
        elseif ($carreraLider == '') {
            echo json_encode('Ingrese la carrera del lider de equipo');
        }

        //Si no ha ingresado el nombre del segundo integrante
        elseif ($nomsegundo == '') {
            echo json_encode('Ingrese el nombre del segundo integrante');
        }

        //Si no ha ingresado el apellido del segundo integrante
        elseif ($apsegundo == '') {
            echo json_encode('Ingrese el apellido del segundo integrante');
        }

        //Si no ha ingresado la carrera del segundo integrante
        elseif ($casegundo == '') {
            echo json_encode('Ingrese la carrera del segundo integrante');
        }

        //Si no ha ingresado el nombre del tercer integrante
        elseif ($nomtercero == '') {
            echo json_encode('Ingrese el nombre del tercer integrante');
        }

        //Si no ha ingresado el apellido del tercero integrante
        elseif ($aptercero == '') {
            echo json_encode('Ingrese el apellido del tercer integrante');
        }

        //Si no ha ingresado la carrera del tercer integrante
        elseif ($catercero == '') {
            echo json_encode('Ingrese la carrera del tercer integrante');
        }

        //Si no ha ingresado el nombre del cuarto integrante
        elseif ($nomcuarto == '') {
            echo json_encode('Ingrese el nombre del cuarto integrante');
        }

        //Si no ha ingresado el apellido del cuarto integrante
        elseif ($apcuarto == '') {
            echo json_encode('Ingrese el apellido del cuarto integrante');
        }

        //Si no ha ingresado la carrera del cuarto integrante
        elseif ($cacuarto == '') {
            echo json_encode('Ingrese la carrera del cuarto integrante');
        } else {

            $host = "127.0.0.1";
            $port = 3305;
            $socket = "";
            $user = "marcos";
            $password = "Marcos619!";
            $dbname = "hackaton";

            $conexion = new mysqli($host, $user, $password, $dbname, $port, $socket)
                or die('No se pudo conectar a la base de datos' . mysqli_connect_error());


            //condicion si el nombre de equipo ingresado ya existe..

            //Condicion si alguien del equipo ya está en otro equipo..

            //Si no se cumple ninguna de esas condiciones, registrar..
            $query = "INSERT INTO `hackaton`.`equipos` (`nombre_equipo`, `institucion`, `telefono`, `correo`, `nomlider`, `aplider`, `calider`, `nom2`, `ap2`, `ca2`, `nom3`, `ap3`, `ca3`, `nom4`, `ap4`, `ca4`) VALUES ('$equipo', '$institucion', '$telefono', '$correo', '$nombreLider', '$apellidoLider', '$carreraLider', '$nomsegundo', '$apsegundo', '$casegundo', '$nomtercero', '$aptercero', '$catercero', '$nomcuarto', '$apcuarto', '$cacuarto')";
            //INSERT INTO `hackaton`.`equipos` (`idequipo`, `nombre_equipo`, `institucion`, `telefono`, `correo`, `nomlider`, `aplider`, `calider`, `nom2`, `ap2`, `ca2`, `nom3`, `ap3`, `ca3`, `nom4`, `ap4`, `ca4`) VALUES ('1', 'Los Bocadines', 'Itsl', '8717321111', 'marcos@gmail.com', 'Marcos', 'Artiño', 'Informática', 'Juan', 'Liendo', 'Informática', 'Hector', 'Gurrola', 'Informática', 'Brandon', 'Zapata', 'Informática');
            $query2 = "INSERT INTO `hackaton`.`participantes` (`nombre_equipo`, `nombre`, `apellido`, `carrera`) VALUES ('$equipo', '$nombreLider', '$apellidoLider', '$carreraLider')";
            $query3 = "INSERT INTO `hackaton`.`participantes` (`nombre_equipo`, `nombre`, `apellido`, `carrera`) VALUES ('$equipo', '$nomsegundo', '$apsegundo', '$casegundo')";
            $query4 = "INSERT INTO `hackaton`.`participantes` (`nombre_equipo`, `nombre`, `apellido`, `carrera`) VALUES ('$equipo', '$nomtercero', '$aptercero', '$catercero')";
            $query5 = "INSERT INTO `hackaton`.`participantes` (`nombre_equipo`, `nombre`, `apellido`, `carrera`) VALUES ('$equipo', '$nomcuarto', '$apcuarto', '$cacuarto')";

            
            try {
                //Server settings
                $mail->SMTPDebug = 0;                      // Enable verbose debug output
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'marcosadrian2707@gmail.com';                     // SMTP username
                $mail->Password   = 'marcos619';                               // SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
                //Recipients
                $mail->setFrom('marcosadrian2707@gmail.com', 'Hackaton');
                $mail->addAddress($correo, 'Remitente');     // Add a recipient
    
                // Attachments
                $archivo = 'manual.pdf';
                $mail->addAttachment($archivo,$archivo);          // Add attachments
                //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    
                // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = 'Registro Hackaton 2020';
                $mail->AddEmbeddedImage("logooo3.png", "imagensita", "logooo3.png"); 
                $mail->AddEmbeddedImage("zoom.png", "imagensitazoom", "zoom.png");
                $mail->Body    = '<div>
                            <center>
                                <h1>Bienvenidos al Hackaton 2020!</h1>
                                <img alt="PHPMailer" src="cid:imagensita">
                                <h3 style="color: #b82c54;">Del 27 al 29 de Noviembre</h3>
                                <h1>Hola '.$nombreLider.' '.$apellidoLider.'!</h1>
                                <h3>Has registrado al equipo '.$equipo.' al Hackaton 2020!</h3>
    
                                <table>
                                    <tr style="background-color: #b82c54;">
                                        <th>Institución:</th>
                                        <th>Integrantes:</th>
                                        <th>Carreras:</th>
                                        <th>Contacto:</th>
                                    </tr>
    
                                    <tr>
                                        <td>'.$institucion.'</td>
                                        <td>'.$nombreLider.' '.$apellidoLider.'</td>
                                        <td>'.$carreraLider.'</td>
                                        <td>Telefono: '.$telefono.'</td>
                                    </tr>
    
                                    <tr>
                                        <td></td>
                                        <td>'.$nomsegundo.' '.$apsegundo.'</td>
                                        <td>'.$casegundo.'</td>
                                        <td>Correo: '.$correo.'</td>
                                    </tr>
    
                                    <tr>
                                        <td></td>
                                        <td>'.$nomtercero.' '.$aptercero.'</td>
                                        <td>'.$catercero.'</td>
                                        <td></td>
                                    </tr>
    
                                    <tr>
                                        <td></td>
                                        <td>'.$nomcuarto.' '.$apcuarto.'</td>
                                        <td>'.$cacuarto.'</td>
                                        <td></td>
                                    </tr>
                                </table>
    
                                <h4>Estan listos para las 72 horas?</h4>
                                <h5>Nos mantendremos en contacto contigo en los proximos días.</h5>
                                <br>
                                <h1 style="color: #19B7E1;">Link de Zoom: </h1>
                                <img alt="PHPMailer" src="cid:imagensitazoom">
                                <h2 style="color: black;">linkblablabla</h2>
                                <h3>Recuerda entrar con tu cuenta de Zoom el dia 27 de Noviembre a las 16 Hrs.</h3>
                            </center>
                        </div>';
    
                $mail->send();
                if ($conexion->query($query) === true && $conexion->query($query2) === true && $conexion->query($query3) === true && $conexion->query($query4) === true && $conexion->query($query5) === true) {
                    echo json_encode('Se ha registrado correctamente!!');
                    
                } 
                
                else {
                    echo json_encode('Error en la base de datos!!');
                }
            } catch (Exception $e) {
                echo json_encode('Error en el servidor de correos!!');
            }

            
        }
    }


?>