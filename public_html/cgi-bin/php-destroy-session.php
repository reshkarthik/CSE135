<?php
session_start();
?>

<?php
// remove all session variables
session_unset();

// destroy the session
session_destroy();
?>

<?php echo '<html><head><title>PHP Session Destroyed</title></head>
	<body><h1 align=center>Session Destroyed</h1>
      <hr/>'; ?>
<?php      
print "<a href=\"/php-cgiform.html\">Back to the PHP CGI Form</a><br />";
print "<a href=\"/cgi-bin/php-sessions-1.php\">Back to Page 1</a><br />";
print "<a href=\"/cgi-bin/php-sessions-2.php\">Back to Page 2</a>"; ?>
<?php echo '</body>' ?>
<?php echo '</html>' ?> 