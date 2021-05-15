<?php
    echo createSession();
?>
<?php function createSession(){
    session_start();
    return session_id();
    
  } ?>