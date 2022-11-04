<?php
ob_start();
include("connect.php");
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if($_SERVER['REQUEST_METHOD'] == "POST" && !empty($_POST)){    
    $user_id = str_pad(mt_rand(1,9999999),7,'0',STR_PAD_LEFT);
    $username = filter_var(htmlentities($_POST['username']),FILTER_UNSAFE_RAW);
    $password = filter_var(htmlentities($_POST['password']),FILTER_UNSAFE_RAW);
	$fname = filter_var(htmlentities($_POST['fname']),FILTER_UNSAFE_RAW);
    $lname = filter_var(htmlentities($_POST['lname']),FILTER_UNSAFE_RAW);
    $email = filter_var(htmlentities($_POST['email']),FILTER_UNSAFE_RAW);
    $faculty = filter_var(htmlentities($_POST['faculty']),FILTER_UNSAFE_RAW);
    $phone = filter_var(htmlentities($_POST['phone']),FILTER_UNSAFE_RAW);
    $photo = $_FILES['image'];

    if($fname == null || $username == null || $email == null || $faculty == null || $password == null || $lname == null || $phone == null){
        echo "<b>Error!</b> Please fill required fields.";
        exit();
    }else{
    	$checkuser = $db_conn->prepare("SELECT * FROM users WHERE username = :username");
        $checkuser->bindParam(":username", $username, PDO::PARAM_STR);
        $checkuser->execute();
        $userExists = $checkuser->rowCount();

        $checkemail = $db_conn->prepare("SELECT * FROM users WHERE email = :email");
        $checkemail->bindParam(":email", $email, PDO::PARAM_STR);
        $checkemail->execute();
        $emailExists = $checkemail->rowCount();
        if ($userExists > 0) {
            echo "<b>Error! in username :</b> This username is taken, please try another";
            exit();
        }elseif($emailExists > 0){
            echo "<b>Error! in email :</b> This email address is already taken";
            exit();
        }elseif(strlen($password) < 5){
            echo "<b>Error! in password :</b> Password should be more than 5 characters long";
            exit();
        }elseif(strpos($username, ' ') !== false || preg_match('/[\'^£$%&*()}{@#~?><>,.|=+¬-]/', $username) || !preg_match('/[A-Za-z0-9]+/', $username)) {
            echo "<b>Error! in username :</b> Special characters not allowed.";
            exit();
        }elseif(preg_match('/[\'^£$%&*()}{@#~?><>,.|=+¬-]/', $fname) || !preg_match('/[A-Za-z0-9]+/', $fname)) {
            echo "<b>Error! in firstname :</b> Special characters not allowed.";
            exit();
        }
        elseif(preg_match('/[\'^£$%&*()}{@#~?><>,.|=+¬-]/', $lname) || !preg_match('/[A-Za-z0-9]+/', $lname)) {
            echo "<b>Error! in lastname :</b> Special characters not allowed.";
            exit();
        }
        elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<b>Error!</b> Invalid email address.";
            exit();
        }else{
        	$fileName = $_FILES["image"]["name"];
			$fileTmpLoc = $_FILES["image"]["tmp_name"];
			$fileType = $_FILES["image"]["type"];
			$fileSize = $_FILES["image"]["size"]; 
			$fileErrorMsg = $_FILES["image"]["error"];
			$fileName = preg_replace('#[^a-z.0-9]#i', '', $fileName); 
			$kaboom = explode(".", $fileName);
			$fileExt = end($kaboom);
			$fileName = $user_id.".".$fileExt;

			if($fileSize > 8422145) {
				echo "<b>Error! </b> Your image must be less than 8MB of size.";
				unlink($fileTmpLoc); 
				exit();
			}
			if (!preg_match("/.(jpeg|jpg|png|webp)$/i", $fileName) ) {  
				echo "<b>Error! </b> Your image was not jpeg, jpg, webp or png file.";
				unlink($fileTmpLoc);
				exit();
			}
			if ($fileErrorMsg == 1) {
				echo "<b>Error! </b> An error occured while processing the image. Try again.";
				exit();
			}else{
				$moveResult = move_uploaded_file($fileTmpLoc, "C:/Users/Igwek/Desktop/tutor/public/images/users/$fileName");
				if ($moveResult != true) {
					echo "<b>Error! </b> ERROR: File not uploaded. Try again.";
					exit();
				}else{
		        	$options = array(
		                "MyTutotApp" => 32,
		            );

		            $password_hashed = password_hash($password, PASSWORD_BCRYPT, $options);

		            $insertDb = $db_conn->prepare("INSERT INTO users (user_id, fname, lname, username, password, email, phone, faculty, photo) VALUES (:user_id, :fname, :lname, :username, :password, :email, :phone, :faculty, :photo)");
		            $insertDb->bindParam(':user_id', $user_id, PDO::PARAM_STR);
		            $insertDb->bindParam(':fname', $fname, PDO::PARAM_STR);
		            $insertDb->bindParam(':lname', $lname, PDO::PARAM_STR);
		            $insertDb->bindParam(':username', $username, PDO::PARAM_STR);
		            $insertDb->bindParam(':password', $password_hashed, PDO::PARAM_STR);
		            $insertDb->bindParam(':email', $email, PDO::PARAM_STR);
		            $insertDb->bindParam(':phone', $phone, PDO::PARAM_STR);
		            $insertDb->bindParam(':faculty', $faculty, PDO::PARAM_STR);
		            $insertDb->bindParam(':photo', $fileName, PDO::PARAM_STR);
		            if ($insertDb->execute()) {
		                echo "success";
		            }else{
		            	unlink("C:/Users/Igwek/Desktop/tutor/src/components/images/users/$fileName");
		                echo "<b>Error!</b> There was an error with registration";
		            }
		        }
		    }
        }
    }
}else{
	echo "You have no data to post";
}


?>