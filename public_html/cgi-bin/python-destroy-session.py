#!/usr/bin/python3
 
import os
if 'HTTP_COOKIE' in os.environ:
    allcookies = os.environ['HTTP_COOKIE'].split(";")
    for cookie in allcookies:
        pair = cookie.split("=")
        if len(pair) > 1:
            if pair[0] == 'user' and len(pair[1]):
                if os.path.exists("/tmp/"+pair[1]+".txt"):
                    os.remove("/tmp/"+pair[1]+".txt")
            print("Set-Cookie:user=")
print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
print('''<html><head><title>Python Session Destroyed</title></head>
	<body><h1 align=center>Session Destroyed</h1>
  	<hr/>\n''')




print("<br/><br/>")
print("<a href=\"/python-cgiform.html\">Back to the Python CGI Form</a><br />")
print("<a href=\"/cgi-bin/python-sessions-1.py\">Back to Page 1</a><br />")
print("<a href=\"/cgi-bin/python-sessions-2.py\">Back to Page 2</a>")
print('</body>')
print('</html>')