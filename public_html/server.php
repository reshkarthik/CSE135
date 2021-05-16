<?php
    $myfile = fopen("/var/www/reshmakarthik.studio/public_html/sessionID.txt", "w") or die("Unable to open file!");;
    fwrite($myfile, createSession());
    fclose($myfile);
?>
<?php function createSession(){
    session_start();
    return session_id();
    
  } ?>