#!/usr/bin/ruby

print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print '<html><head><title>Environment Variables</title></head>
<body><h1 align=center>Environment Variables</h1>
  <hr/>'

ENV.each do |key, value|
    print "<b>"+key + '</b> : ' + value +"</br>"
end

print "</body>";
print "</html>";