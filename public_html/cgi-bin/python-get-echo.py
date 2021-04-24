#!/usr/bin/python3

import os
from urllib.parse import urlparse, parse_qs

print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
print('''<html><head><title>GET Request Echo</title></head>
	<body><h1 align=center>GET Request Echo</h1>
  	<hr/>\n''')
print('<b>Query String:  </b>'+ os.environ['QUERY_STRING']+'</br>')
d = parse_qs(os.environ['QUERY_STRING'])
for param in d:
	if len(d[param]) == 1:
		print('<li> <b>'+param+': </b>'+d[param][0]+'</li>')
	else:
		print('<li> <b>'+param+': </b>'+str(d[param])+'</li>')
print('</ul>')
print("</body>")
print("</html>")