<?php
session_start();
if (!isset($_SESSION["is_login"])) {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php include "layout/header.html"; ?>

    <h3>Selamat Datang, <?= htmlspecialchars($_SESSION["username"]) ?>!</h3>

    <form action="logout.php" method="POST">
        <button type="submit" name="logout">Logout</button>
    </form>

    <?php include "layout/footer.html"; ?>
</body>
</html>
