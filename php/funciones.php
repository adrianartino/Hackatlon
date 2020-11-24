
<?php

class LibOperaciones {
    //variables equipo
    private $equipo;
    private $institucion;

    //variables lider
    private $nombreLider;
    private $apellidoLider;
    private $telefono;
    private $correo;
    private $carreraLider;

    //variables segundo integrante
    private $nomsegundo;
    private $apsegundo;
    private $casegundo;

    //variables tercer integrante
    private $nomtercero;
    private $aptercero;
    private $catercero;

    //variables cuarto integrante
    private $nomcuarto;
    private $apcuarto;
    private $cacuarto;

    function __construct($equipo,
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
                        $cacuarto) 
    {
            //variables equipo
            $this->equipo=$equipo;
            $this->institucion=$institucion;

            //variables lider
            $this->nombreLider=$nombreLider;
            $this->apellidoLider=$apellidoLider;
            $this->telefono=$telefono;
            $this->correo=$correo;
            $this->carreraLider=$carreraLider;

            //variables segundo integrante
            $this->nomsegundo=$nomsegundo;
            $this->apsegundo=$apsegundo;
            $this->casegundo=$casegundo;

            //variables tercer integrante
            $this->nomtercero=$nomtercero;
            $this->aptercero=$aptercero;
            $this->catercero=$catercero;

            //variables cuarto integrante
            $this->nomcuarto=$nomcuarto;
            $this->apcuarto=$apcuarto;
            $this->cacuarto=$cacuarto;
    }

    //Devuelve true o false a validacion.php
    function ValidaCorreo()
    {
        if (filter_var($this->correo, FILTER_VALIDATE_EMAIL)) 
        {
            return true;
        } else 
        {
            return false;
        }
    }
   
    //Valida si el usuario no ingresa ningun dato.
    function ValidaVacio() 
    {
        if (
            $this->equipo === '' && $this->institucion === '' 
            && $this->nombreLider === '' && $this->apellidoLider === ''
            && $this->telefono === '' && $this->correo === '' && $this->carreraLider == ''
            && $this->nomsegundo === '' && $this->apsegundo === '' && $this->casegundo === ''
            && $this->nomtercero === '' && $this->aptercero === '' && $this->catercero === ''
            && $this->nomcuarto === '' && $this->apcuarto === '' && $this->cacuarto === ''
        ) 
        {
            return false;
        }
        else
        {
            return true;
        }

    }

    //Validar si existen datos , uno por uno.
    function ValidaExistenDatos()
    {
        if ($this->equipo === '') 
        {
            return 'No se ha ingresado el nombre del equipo';
        }
        elseif ($this->institucion == '') 
        {
            return 'No se ha ingresado la institución';
        }
        elseif ($this->nombreLider == '') 
        {
            return 'No ha ingresado el nombre del lider de equipo';
        }
        elseif ($this->apellidoLider == '') {
            return 'No ha ingresado el apellido del lider de equipo';
        }
        elseif ($this->correo == '') {
            return 'No ha ingresado el correo electrónico';
        }
        elseif ($this->telefono == '') {
            return 'No ha ingresado el telefono o celular';
        }
        elseif ($this->carreraLider == '') {
            return 'Ingrese la carrera del lider de equipo';
        }
        elseif ($this->nomsegundo == '') {
            return 'Ingrese el nombre del segundo integrante';
        }
        elseif ($this->apsegundo == '') {
            return 'Ingrese el apellido del segundo integrante';
        }
        elseif ($this->casegundo == '') {
            return 'Ingrese la carrera del segundo integrante';
        }
        elseif ($this->nomtercero == '') {
            return 'Ingrese el nombre del tercer integrante';
        }
        elseif ($this->aptercero == '') {
            return 'Ingrese el apellido del tercer integrante';
        }
        elseif ($this->catercero == '') {
            return 'Ingrese la carrera del tercer integrante';
        }
        elseif ($this->nomcuarto == '') {
            return 'Ingrese el nombre del cuarto integrante';
        }
        elseif ($this->apcuarto == '') {
            return 'Ingrese el apellido del cuarto integrante';
        }
        elseif ($this->cacuarto == '') {
            return 'Ingrese la carrera del cuarto integrante';
        }
        
        return 'OK'; //Devuelve ok si se han ingresado todos los datos.
    }


    function ValidaLongitudTelefono()
    {
        if ($this->telefono != '') //Si se ingreso un telefono..
        {
            $long = strlen($this->telefono); //Variable para guardar longitud de este.

            if ($long < 10) //Si la long es menor a 10.
            {
                return false;
            }
            else //True
            {
                return false;
            }
        }
    }

    function ValidaDatosCorrectos()
    {

    }



}




?>