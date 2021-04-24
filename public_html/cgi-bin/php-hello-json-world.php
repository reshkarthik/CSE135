<?php
$myObj->Message = "Hello World PHP, from Reshma";
$myObj->Date = date('Y-m-d');
$myObj->IPAddress = $_SERVER['REMOTE_ADDR'];

$myJSON = json_encode($myObj);

echo $myJSON;
?>