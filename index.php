<?php
// Mengecek apakah data dikirim melalui metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);

    echo "<h2>Data yang Anda Kirim:</h2>";
    echo "Nama: " . $nama . "<br>";
    echo "Email: " . $email . "<br>";
} else {
    echo "Silakan isi formulir terlebih dahulu!";
}

session_start();

// Logout logic
if (isset($_POST['logout'])) {
    session_unset();
    session_destroy();
    header('Location: index.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css"> <!-- Tambahkan CSS jika diperlukan -->
</head>
<body>

    <!-- Header -->
    <?php include "layout/header.html"; ?>

    <div class="container">
        <h3>Selamat Datang, <?= htmlspecialchars($_SESSION["username"] ?? "Guest") ?> </h3>

        <form action="dashboard.php" method="POST">
            <button type="submit" name="logout">Logout</button>
        </form>
    </div>

    <!-- Footer -->
    <?php include "layout/footer.html"; ?>

</body>
</html>
