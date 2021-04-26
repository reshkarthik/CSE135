#!/usr/bin/ruby
require "cgi"
username = ""
print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print '<html><head><title>Ruby Sessions</title></head>
<body><h1 align=center>Ruby Sessions P2</h1>
  <hr/>'

arr = ENV["HTTP_COOKIE"].split(";",-1)
arr.each do |pair|
    arr2 = pair.split("=",-2)
    if arr2.length() > 1 && arr2[0] == "user" && arr2[1].length > 0
        userId = arr2[1]
        username = File.open("/tmp/"+userId+".txt").read
    end
end
if username != ""
    print "<p><b>Name:</b> "+username
else
    print "<p><b>Name:</b> You do not have a name set</p>"
end

print "<br/><br/>";
print "<a href=\"/cgi-bin/ruby-sessions-1.rb\">Session Page 1</a><br/>";
print "<a href=\"/ruby-cgiform.html\">Ruby CGI Form</a><br />";
print "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">";
print "<button type=\"submit\">Destroy Session</button>";
print "</form>";

print "</body>";
print "</html>";