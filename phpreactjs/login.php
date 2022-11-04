<?php
ob_start();
include("connect.php");
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if($_SERVER['REQUEST_METHOD'] == "POST" && !empty($_POST)){    
    $username = filter_var(htmlentities($_POST['username']),FILTER_UNSAFE_RAW);
    $password = filter_var(htmlentities($_POST['password']),FILTER_UNSAFE_RAW);

    if($username == null && $password == null){
        echo "<b>Error!</b> Enter your username and password to login";
    }elseif ($username == null){
        echo "<b>Error!</b> Enter your username to login";
    }elseif($password == null){
        echo "<b>Error!</b> Enter your password to login";
    }
    else{
        $chekPwd = $db_conn->prepare("SELECT * FROM users WHERE username = :username");
        $chekPwd->bindParam(':username',$username,PDO::PARAM_STR);
        $chekPwd->execute();
        if ($chekPwd->rowCount() < 1) {
            echo "<b>Error!</b> No user exists with that username";
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

            if (password_verify($password,$rPassword)) {
                $loginsql = "SELECT * FROM users WHERE username = :rUsername AND password = :rPassword";
                $query = $db_conn->prepare($loginsql);
                $query->bindParam(':rUsername', $username, PDO::PARAM_STR);
                $query->bindParam(':rPassword', $rPassword, PDO::PARAM_STR);
                $query->execute();
                $num = $query->rowCount();
                if($num == 0){
                    echo "<b>Error!</b> User and password incorrect!";
                }
                else{
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
            }
            else{
                echo "<b>Error!</b> Incorrect password Please try again";
            }
        }
    }
}else{
    echo "nill";
}


?>