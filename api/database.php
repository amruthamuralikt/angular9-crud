<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
define('DB_host', 'localhost');
define('DB_user', 'root');
define('DB_password', '');
define('DB_name', 'angular9');

function connect()
{
  $connect = mysqli_connect(DB_host ,DB_user ,DB_password ,DB_name);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();