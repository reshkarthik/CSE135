<?php echo '<html><head><title>GET Request Echo</title></head>
	<body><h1 align=center>GET Request Echo</h1>
  	<hr/>'; ?>
 <?php echo '<b>Query String: </b>'.$_SERVER['QUERY_STRING'].'<br>'; ?> 
 <?php echo '<ul>'; ?> 
 <?php foreach($_GET as $key_name => $key_value) {
     print '<li> <b>'.$key_name.': </b>'. $key_value . '</li>';
    }?>
 <?php echo '</ul>'; ?> 
