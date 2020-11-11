<?php                
                           $BodyEmail='<div>
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
?>