#!/usr/bin/ruby
require "cgi"
print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print '<html><head><title>POST Request Echo</title></head>
<body><h1 align=center>POST Request Echo</h1>
  <hr/>'

print '<ul>';

dictionary = CGI::parse($stdin.read)
dictionary.each do |key, value|
    if value.length() == 1
        print "<li><b>"+key + '</b> : ' + value[0] +"</li></br>"
    else
        print "<li><b>"+key + "</b> : #{value.to_s} </li></br>"
    end
end
print "</ul></body>";
print "</html>";