#!/usr/bin/python3

import os, sys
from urllib.parse import urlparse, parse_qs

print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
print('''<html><head><title>General Request Echo</title></head>
    <body><h1 align=center>General Request Echo</h1>
      <hr/>\n''')
      
print("<b>Request Method:</b>  " + os.environ['REQUEST_METHOD'] + "</br></br>")
print("<b>Protocol:</b>  " + os.environ['SERVER_PROTOCOL'] + "</br></br>") 
print("<b>Query:</b>  " + os.environ['QUERY_STRING'] + "</br>")
post = False
if os.environ['REQUEST_METHOD'] == 'POST':
    d = parse_qs(sys.stdin.read())
    print("<b>Message Body:</b></br>")
    post = True
else:
    d = parse_qs(os.environ['QUERY_STRING'])

print('<ul>')
for param in d:
    if len(d[param]) == 1:
        print('<li> <b>'+param+': </b>'+d[param][0]+'</li>')
    else:
        print('<li> <b>'+param+': </b>'+str(d[param])+'</li>')
print('</ul>')

if not post:
    print("<b>Message Body:</b></br>")
print("</body>")
print("</html>")