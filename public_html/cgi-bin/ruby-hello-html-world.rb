#!/usr/bin/ruby

print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print "<html>";
print "<head>";
print "<title>Hello, Ruby!</title>";
print "</head>";
print "<body>";

print "<h1>Reshma was here - Hello, Ruby!</h1>";

print "<p>Current Time: "+(Time.new).inspect+"</p>";


print "<p>Your IP Address: "+ENV['REMOTE_ADDR']+"</p>";

print "</body>";
print "</html>";