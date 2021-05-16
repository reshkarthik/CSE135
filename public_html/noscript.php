<?php 

include 'server.php';
$url = 'https://reshmakarthik.studio/api/static';
$data = array('X-JS-Enabled' => false, 'X-Session-ID' => createSession());
$options = array(
    'http' => array(
    'header'  => 'Content-Type: application/json\r\n',
    'method'  => 'POST',
    'body' => http_build_query($data),
)
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$myfile = fopen("staticID.txt", "w") or die("Unable to open file!");;
fwrite($myfile, createSession());
fclose($myfile);


// if ($result === FALSE) { 
//     echo 'failed'; 
// }
// else{
//     var_dump($result);
// }
?>

