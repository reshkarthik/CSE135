<?php echo '<html><head><title>Environment Variables</title></head>
	<body><h1 align=center>Environment Variables</h1>
  	<hr/>'; ?>
<?php echo "<h1>Environment Variables</h1>"?>
    <?php foreach(getenv() as $key_name => $key_value) {
     print '<b>'.$key_name.': </b>'. $key_value . "<br>";
    }?>
<?php echo "<h1>Server Variables</h1>"?>
 <?php foreach($_SERVER as $key_name => $key_value) {
     print '<b>'.$key_name.': </b>'. $key_value . "<br>";
    }?>