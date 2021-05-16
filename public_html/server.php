<?php
    $myfile = fopen("sessionID.txt", "w") or die("Unable to open file!");;
    fwrite($myfile, createSession());
    fclose($myfile);
?>
<?php function createSession(){
    session_start();
    return session_id();
    
  } ?>