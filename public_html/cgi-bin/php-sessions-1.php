<?php
session_start();
?>
<?php echo '<html><head><title>PHP Sessions</title></head>
	<body><h1 align=center>PHP Sessions Page 1</h1>
      <hr/>'; ?>
<?php
    if (isset($_POST['username']) || isset($_SESSION['username'])) {
        $_SESSION['username'] = $_POST['username'];

        // Use the following code to print out the variables.
        echo "<p><b>Name:</b>   ".$_SESSION['username']."<p>";
        echo '<br>';
    }
    else{
        echo "<p><b>Name:</b> You do not have a name set</p>";
    }
    echo "<br/><br/>";
echo "<a href=\"/cgi-bin/php-sessions-2.php\">Session Page 2</a><br/>";
echo "<a href=\"/php-cgiform.html\">Perl CGI Form</a><br />";
echo "<form style=\"margin-top:30px\" action=\"/cgi-bin/php-destroy-session.php\" method=\"get\">";
echo "<button type=\"submit\">Destroy Session</button>";
echo "</form>";
?> 
 <?php echo '</body>' ?>
 <?php echo '</html>' ?> 