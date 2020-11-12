
<?php
    //definir zona horaria, hora y fecha
    date_default_timezone_set('America/Mexico_City');
    $fecha =  date("Y-m-d"); 
    $hora = date("G:i:s");


    //librerías phpmailer
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/Exception.php';
    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/SMTP.php';

    include 'config.php'; //Inclución archivo configuración.
    include 'funciones.php'; //validaciones

    $mail = new PHPMailer(true); //Se crea el objeto mail.

    //variables equipo
    $equipo = $_POST['equipo'];
    $institucion = $_POST['institucion'];

    //variables lider
    $nombreLider = $_POST['nombre_lider'];
    $apellidoLider = $_POST['apellido_lider'];
    $telefono = $_POST['telefono_lider'];
    $correo = $_POST['correo_lider'];
    $carreraLider = $_POST['carrera_lider'];

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

    //clase LibOperaciones, le damos los valores que recibimos del post.
    $Operaciones = new LibOperaciones($equipo,
    $institucion,

    $nombreLider,
    $apellidoLider,
    $telefono,
    $correo,
    $carreraLider,

    $nomsegundo,
    $apsegundo,
    $casegundo,

    $nomtercero,
    $aptercero,
    $catercero,
    
    $nomcuarto,
    $apcuarto,
    $cacuarto);

    //Banderas
    $telefonobien = true;
    $telefonoingresado = false;
    $correobien = false;
    $registrado = false;
    $nombreExiste = false;
    $integranteExiste = false;

    //si el correo está bien... devuelve true o false.
    $correobien = $Operaciones->ValidaCorreo();



    //Si no ingresa datos..
    if (!$Operaciones->ValidaVacio()) 
    {
        echo json_encode('Faltan datos por ingresar!'); //Regresa data a js.
    }
    else //Si se han ingresado todos los datos de manera correcta..
    {
        //Si ingreso datos..
        if($Operaciones->ValidaExistenDatos() =='OK')
        {
            

            
                //Conexion a la bd
                $con = new mysqli($Host, $User, $Password, $Dbname, $Port, $Socket)
                or die('No se pudo conectar a la base de datos' . mysqli_connect_error());

                // Validacion Nombre del equipo duplicado
                //query consulta para ver si hay un equipo con el nombre ya registrado
                $result = $con->query("SELECT nombre_equipo FROM equipos WHERE nombre_equipo='$equipo'");
                $row_cnt = mysqli_num_rows($result); //Contar el numero de filas

                if($row_cnt >= 1) //Si es uno..
                {
                    echo json_encode('Ya existe el nombre de equipo!');
                }
                else //Si no hay ningun nombre de equipo con el nombre ingresado..
                {
                    $con->autocommit(FALSE);

                    //Query para insertar a la tabla equipos.
                    $query_insert_equipo = "INSERT INTO equipos(nombre_equipo,institucion,fecha_registro,hora_registro)
                    VALUES('$equipo','$institucion',CURDATE(),CURTIME());";
                    
                    //Ingresa el query pero espera hacer el siguiente registro en otra tabla.
                    $con->query($query_insert_equipo);

                    $id_equipo = $con->insert_id; //Id del primer equipo.

                    //Query ingresar participantes.
                    $query= "INSERT INTO participantes(id_equipo,nombre,
                                                apellido,carrera,
                                                telefono,correo,
                                                es_lider,fecha_registro,
                                                hora_registro)";
                    
                    $query_insert_participante1 = $query."VALUES($id_equipo,'$nombreLider',
                    '$apellidoLider','$carreraLider',
                    '$telefono','$correo',
                    true,CURDATE(),
                    CURTIME())";

                    $query_insert_participante2 = $query."VALUES($id_equipo,'$nomsegundo',
                    '$apsegundo','$casegundo',
                    NULL,NULL,
                    false,CURDATE(),
                    CURTIME())";

                    $query_insert_participante3 = $query."VALUES($id_equipo,'$nomtercero',
                    '$aptercero','$catercero',
                    NULL,NULL,
                    false,CURDATE(),
                    CURTIME())";

                    $query_insert_participante4 = $query."VALUES($id_equipo,'$nomcuarto',
                    '$apcuarto','$cacuarto',
                    NULL,NULL,
                    false,CURDATE(),
                    CURTIME())";

                    //Si el query de participantes 1,2,3 y 4 está bien..
                    if($con->query($query_insert_participante1) and $con->query($query_insert_participante2)
                    and $con->query($query_insert_participante3) and $con->query($query_insert_participante4))
                    {
                    $con->commit(); //Ejecutar los querys y registrar en equipos y participantes

                    //Server settings
                    $mail->SMTPDebug = 0;                                // Enable verbose debug output
                    $mail->isSMTP();                                     // Send using SMTP
                    $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
                    $mail->SMTPAuth   = true;                            // Enable SMTP authentication
                    $mail->Username   = $Maincorreo;                     // SMTP username
                    $mail->Password   = $Pwd;                            // SMTP password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                    $mail->Port       = 587;                             // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                    //Recipients
                    $mail->setFrom($Maincorreo, 'Hackaton');
                    $mail->addAddress($correo, $equipo);     // Add a recipient

                    // Attachments
                    $archivo = 'info_hackaton.pdf';
                    $mail->addAttachment($archivo,$archivo);          // Add attachments
                    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

                    $mail->isHTML(true);                                  // Set email format to HTML
                    $mail->Subject = 'Registro Hackaton 2020';
                    $mail->AddEmbeddedImage("logooo3.png", "imagensita", "logooo3.png"); 
                    $mail->AddEmbeddedImage("zoom.png", "imagensitazoom", "zoom.png");
                    $mail->AddEmbeddedImage("etapas2.png", "imagenetapas", "etapas2.png");
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
                                    <h1>Etapas del concurso</h1>
                                    <img alt="PHPMailer" src="cid:imagenetapas">
                                    <h4>Estan listos para las 72 horas?</h4>
                                    <h5>Nos mantendremos en contacto contigo en los proximos días.</h5>
                                    <br>
                                    <h1 style="color: #19B7E1;">Link de Zoom: </h1>
                                    <img alt="PHPMailer" src="cid:imagensitazoom">
                                    <h2 style="color: black;">linkblablabla</h2>
                                    <h3>Recuerda entrar con tu cuenta de Zoom el dia 27 de Noviembre a las 16 Hrs.</h3>
                                </center>
                            </div>';

                    $mail->send();//Enviar el correo.
                    echo json_encode('Se ha registrado correctamente!!');
                    }
                    else //Si no se ejecuta bien el query de registro de participantes..
                    {
                        $con->rollback(); //Hace un rollback y no guarda nada.
                        echo json_encode('Error en la base de datos!!');
                    }
                }
            
            
        }
        else //Si hay algun error en los datos ingresados..
        {
            echo json_encode($Operaciones->ValidaExistenDatos()); //Manda data a js.
        }
        
    }    

   
?>