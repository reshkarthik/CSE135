#!/usr/bin/python3

import os

print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
print('''<html><head><title>Environment Variables</title></head>
	<body><h1 align=center>Environment Variables</h1>
  	<hr/>\n''')

for param in os.environ.keys():
   print("<b>"+param+"</b>: "+os.environ[param]+"<br/>")
print("</body>")
print("</html>")