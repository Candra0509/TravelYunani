<?php
$hostname = "localhost";
$username = "root";
$password = "";
$database_name = "Yunani_Travel";

$db = mysqli_connect($hostname, $username, $password, $database_name);

if(mysqli_connect_errno()) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}
?>
