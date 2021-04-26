#!/usr/bin/ruby

arr = ENV["HTTP_COOKIE"].split(";",-1)
arr.each do |pair|
    arr2 = pair.split("=",-2)
    if arr2.length() > 1 && arr2[0] == " user" && arr2[1].length > 0
        userId = arr2[1]
        File.delete("/tmp/"+userId+".txt") if File.exist?("/tmp/"+userId+".txt")
    end
end
print("Set-Cookie:user =;")
print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print '<html><head><title>Ruby Session Destroyed</title></head>
<body><h1 align=center>Session Destroyed</h1>
  <hr/>'






print("<br/><br/>")
print("<a href=\"/ruby-cgiform.html\">Back to the Ruby CGI Form</a><br />")
print("<a href=\"/cgi-bin/ruby-sessions-1.rb\">Back to Page 1</a><br />")
print("<a href=\"/cgi-bin/ruby-sessions-2.rb\">Back to Page 2</a>")
print('</body>')
print('</html>')