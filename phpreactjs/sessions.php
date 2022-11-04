<?php
ob_start();
include("connect.php");
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// if(isset($postdata) && !empty($postdata)){
	$user_id = $request->user_id;
	$chekPwd = $db_conn->prepare("SELECT * FROM users WHERE user_id = :user_id");
    $chekPwd->bindParam(':user_id',$user_id,PDO::PARAM_STR);
    $chekPwd->execute();
    if ($chekPwd->rowCount() < 1) {
        echo "<b>Error!</b> No user exists with that id";
    }while ($row = $chekPwd->fetch(PDO::FETCH_ASSOC)) {
        $rUserId = $row['user_id'];
        $rUsername = $row['username'];
        $rFName = $row['fname'];
        $rLName = $row['lname'];
        $rPassword = $row['password'];
        $rEmail = $row['email'];
        $rFaculty = $row['faculty'];
        $rPhone = $row['phone'];
        $rPhoto = $row['photo'];

        $_SESSION['user_id'] = $rUserId;
        $_SESSION['fname'] = $rFName;
        $_SESSION['lname'] = $rLName;
        $_SESSION['username'] = $rUsername;
        $_SESSION['email'] = $rEmail;
        $_SESSION['faculty'] = $rFaculty;
        $_SESSION['phone'] = $rPhone;
        $_SESSION['photo'] = $rPhoto;
        $_SESSION['message'] = "success";
        echo json_encode($_SESSION);
    }
// }
?>