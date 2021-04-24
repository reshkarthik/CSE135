#!/usr/bin/python3

from datetime import datetime
import html
import os
import json
import logging
date = datetime.now()
address = html.escape(os.environ["REMOTE_ADDR"])

print('''Cache-Control: no-cache
Content-type: text/html\n\n''')
d = {}
print('''<html><head><title>Hello Python!</title></head></html>''')

d["Message"] = "Hello World, from Reshma!"
d["Date"]=str(date)
d["IP address"]=str(address)
print(json.dumps(d))
