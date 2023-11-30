<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $db = new PDO('pgsql:host=localhost;dbname=prueba', 'juan', '2702');

    // Recuperar datos del formulario
    $username = $_POST["username"];
    $password = $_POST["password"];

    $query = $db->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $query->execute([$username, $password]);

    header("Location: /login");
    exit();
}
?>
