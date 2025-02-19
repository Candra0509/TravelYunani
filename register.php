<?php
include "service/database.php";
session_start();

$register_message = "";

// Jika pengguna sudah login, langsung alihkan ke dashboard
if (isset($_SESSION["is_login"])) {
    header("Location: dashboard.php");
    exit();
}

// Proses registrasi
if (isset($_POST["register"])) {
    $username = trim($_POST["username"]);
    $password = $_POST["password"];
    $hash_password = password_hash($password, PASSWORD_BCRYPT);

    try {
        $stmt = $db->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $hash_password);

        if ($stmt->execute()) {
            $register_message = "✅ Pendaftaran berhasil! Silakan login.";
        } else {
            $register_message = "❌ Pendaftaran gagal, coba lagi.";
        }
    } catch (mysqli_sql_exception) {
        $register_message = "⚠️ Username sudah digunakan, coba yang lain.";
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Header -->
    <?php include "layout/header.html"; ?>

    <div class="container">
        <h3>Daftar Akun</h3>

        <!-- Pesan Register -->
        <?php if (!empty($register_message)) : ?>
            <p class="message"><?= htmlspecialchars($register_message); ?></p>
        <?php endif; ?>

        <!-- Form Registrasi -->
        <form action="register.php" method="POST">
            <input type="text" placeholder="Username" name="username" required />
            <input type="password" placeholder="Password" name="password" required />
            <button type="submit" name="register">Daftar Sekarang</button>
        </form>
    </div>

    <!-- Footer -->
    <?php include "layout/footer.html"; ?>

</body>
</html>
