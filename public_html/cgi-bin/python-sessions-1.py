#!/usr/bin/python3

# Import modules for CGI handling 
import cgi, cgitb, os

# Create instance of FieldStorage 
form = cgi.FieldStorage() 
if ("username" in form):
    print("Set-Cookie:username ="+form.getvalue('username'))
print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
print('''<html><head><title>Python Sessions</title></head>
	<body><h1 align=center>Python Sessions P1</h1>
  	<hr/>\n''')


user = False
if ("username" in form):
    user = True
    print("<p><b>Name:</b>   "+form.getvalue('username')+"<p>")
    print('<br>')
elif 'HTTP_COOKIE' in os.environ:
    allcookies = os.environ['HTTP_COOKIE'].split(";")
    for cookie in allcookies:
        pair = cookie.split("=")
        if len(pair) > 1:
            if pair[0] == ' username' and len(pair[1]):
                user = True
                print("<p><b>Name:</b>   "+pair[1]+"<p>")
                print('<br>')
if not user:
    print("<p><b>Name:</b> You do not have a name set</p>")

print("<br/><br/>")
print("<a href=\"/cgi-bin/python-sessions-2.py\">Session Page 2</a><br/>")
print("<a href=\"/python-cgiform.html\">Python CGI Form</a><br />")
print("<form style=\"margin-top:30px\" action=\"/cgi-bin/python-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print('</body>')
print('</html>')