#!/usr/bin/ruby
require 'json'

print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print "<html>";
print "<head>";
print "<title>Hello, Ruby!</title>";
print "</head>";
print "<body>";

dictionary = {'title' => 'Hello, Reshma!', 'heading' => 'Hello, Reshma!', 'message' => 'This page was generated with the Ruby programming language', 'time' => (Time.new).inspect, 'IP' => ENV['REMOTE_ADDR']};

print dictionary.to_json;

print "</body>";
print "</html>";