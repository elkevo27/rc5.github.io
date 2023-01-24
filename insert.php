<?php
include("conexion.php");

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];


$sql = "INSERT INTO suscripcion VALUES ('', '$nombre', '$email', '$mensaje')";
$query = mysqli_query($conexion, $sql);
if ($query) {


    echo "ok";
} else {
    echo "<script>
     alert('Ok! ni vale tu huevada');
    location.href = 'index.php';
    </script>";
}
