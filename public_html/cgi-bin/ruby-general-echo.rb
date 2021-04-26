#!/usr/bin/ruby
require "cgi"
print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print '<html><head><title>General Request Echo</title></head>
<body><h1 align=center>General Request Echo</h1>
  <hr/>'

print "<b>Request Method:</b>  " + ENV['REQUEST_METHOD'] + "</br></br>"
print "<b>Protocol:</b>  " + ENV['SERVER_PROTOCOL'] + "</br></br>"
print "<b>Query:</b>  " + ENV["QUERY_STRING"] + "</br></br>"

post = false
if ENV['REQUEST_METHOD'] == "GET"
    dictionary = CGI::parse(ENV["QUERY_STRING"])
elsif ENV['REQUEST_METHOD'] == "POST"
    dictionary = CGI::parse($stdin.read)
    print "<b>Message Body:</b>  </br>"
    post = true
end

dictionary.each do |key, value|
    if value.length() == 1
        print "<li><b>"+key + '</b> : ' + value[0] +"</li></br>"
    else
        print "<li><b>"+key + "</b> : #{value.to_s} </li></br>"
    end
end
if !post
    print "<b>Message Body:</b>  </br>"
end
print "</ul></body>";
print "</html>";