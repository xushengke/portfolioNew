<?php
//this scipt will connect us to our database
  $user = "root";
  // $pass = "";
  $pass = "root";
  $url = "localhost";
  $db = "db_portfolio";

//ticket to access our db
  // $link = mysqli_connect($url, $user, $pass, $db);
  $link = mysqli_connect($url, $user, $pass, $db, "8888");
  //check our connection if it fails
  if(mysqli_connect_errno)()){
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
  }


?>
