<?php echo '<html><head><title>General Request Echo</title></head>
	<body><h1 align=center>General Request Echo</h1>
      <hr/>'; ?>

 <?php echo "<b>Protocol:</b>  ".$_SERVER['SERVER_PROTOCOL']."</br></br>"; ?> 
 <?php echo "<b>Method:</b>  ".$_SERVER['REQUEST_METHOD']."</br></br>"; ?> 
 <?php echo "<b>Query:</b>  ".$_SERVER['QUERY_STRING']."</br>"; ?> 

 <?php echo '<ul>'; ?> 
 <?php foreach($_GET as $key_name => $key_value) {
     print '<li> <b>'.$key_name.': </b>'. $key_value . '</li>';
    }?>
 <?php echo '</ul>'; ?> 
 <?php echo "<b>Message Body:</b></br> <ul>"; ?> 
 <?php foreach($_POST as $key_name => $key_value) {
     print '<li> <b>'.$key_name.': </b>'. $key_value . '</li>';
    }?>
 <?php echo '</ul>'; ?> 