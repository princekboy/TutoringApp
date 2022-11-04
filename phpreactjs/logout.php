<?php 
ob_start();
include ("connect.php");
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$postdata = file_get_contents("php://input");

if (isset($postdata) AND !empty($postdata)) {
	$request = json_decode($postdata);
	unset($_SESSION['user_id']);
	unset($_SESSION['fname']);
	unset($_SESSION['lname']);
	unset($_SESSION['username']);
	unset($_SESSION['email']);
	unset($_SESSION['photo']);
	unset($_SESSION['phone']);
	unset($_SESSION['faculty']);
	unset($_SESSION['message']);
	echo "success";
}
?>