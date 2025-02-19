<?php
include "service/database.php";
session_start();

$login_message = "";

if(isset($_SESSION["is_login"])) {
    header("Location: index.html");
    exit();
}

if(isset($_POST['login'])) {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    $stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0) {
        $data = $result->fetch_assoc();

        if(password_verify($password, $data['password'])) {
            $_SESSION["username"] = $data["username"];
            $_SESSION["is_login"] = true;
            header("Location: index.html");
            exit();
        } else {
            $login_message = "Password salah.";
        }
    } else {
        $login_message = "Akun tidak ditemukan.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php include "layout/header.html"; ?>
    
    <div class="container">
        <h3>LOGIN AKUN</h3>
        <p class="error-message"><?= $login_message ?></p>

    <form action="login.php" method="POST">
        <input type="text" placeholder="Username" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit" name="login">Login Sekarang</button>
    </form>
</div>
    <?php include "layout/footer.html"; ?>
</body>
</html>
