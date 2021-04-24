#!/usr/bin/python3

import os, sys
from urllib.parse import urlparse, parse_qs

print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
print('''<html><head><title>POST Request Echo</title></head>
	<body><h1 align=center>POST Request Echo</h1>
  	<hr/>\n''')
d = parse_qs(sys.stdin.read())

print('<ul>')
for param in d:
	if len(d[param]) == 1:
		print('<li> <b>'+param+': </b>'+d[param][0]+'</li>')
	else:
		print('<li> <b>'+param+': </b>'+str(d[param])+'</li>')
print('</ul>')
print("</body>")
print("</html>")