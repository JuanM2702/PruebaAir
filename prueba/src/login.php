<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $db = new PDO('pgsql:host=localhost;dbname=prueba', 'juan', '2702');

    $username = $_POST["username"];
    $password = $_POST["password"];

    $query = $db->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $query->execute([$username, $password]);
    $user = $query->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        header("Location: /Index");
        exit();
    } else {
        echo "Credenciales inválidas. Intenta nuevamente.";
    }
}
?>
