#!/usr/bin/python3

from datetime import datetime
import html
import os

date = datetime.now()
address = html.escape(os.environ["REMOTE_ADDR"])

print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
print('''<html><head><title>Hello Python!</title></head>
	<body><h1 align=center>Hello Python!</h1>
  	<hr/>\n''')
print("Hello World, from Reshma!<br/>")
print("This program was generated at: "+str(date)+ "<br/>")
print("Your current IP address is: "+str(address)+"<br/>")

print("</body>")
print("</html>")