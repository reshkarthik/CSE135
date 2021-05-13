<?php 
$url = 'https://reshmakarthik.studio/api/static';
$data = array('X-JS-Enabled' => false);
$options = array(
    'http' => array(
    'header'  => 'Content-Type: application/json\r\n',
    'method'  => 'POST',
    'content' => http_build_query($data),
)
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { 
    echo 'failed'; 
}

var_dump($result);
?>
