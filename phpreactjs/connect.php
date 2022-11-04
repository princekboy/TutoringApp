<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "tutor";
 
try{
	$db_conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);
	$db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
	echo "Connection failed: " . $e->getMessage();
}
session_start();
ob_start();
?>