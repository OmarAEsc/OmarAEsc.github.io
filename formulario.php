
<?php
// Configuración de conexión a la base de datos
$servidor = "localhost";
$usuario = "root";
$contrasena = ""; // Cambia si tienes contraseña
$baseDatos = "ingles";

// Crear conexión
$conn = new mysqli($servidor, $usuario, $contrasena, $baseDatos);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$localidad = $_POST['localidad'];
$certificado = $_POST['certificado'];
$valoracion = $_POST['valoracion'];
$comentarios = $_POST['comentarios'];

// Insertar datos en la base de datos
$sql = "INSERT INTO baselocal (nombre, apellido, correo, telefono, localidad, certificado, valoracion, comentarios) 
        VALUES ('$nombre', '$apellido', '$correo', '$telefono', '$localidad', '$certificado', '$valoracion', '$comentarios')";

if ($conn->query($sql) === TRUE) {
    echo "Reseña enviada correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
