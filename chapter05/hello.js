
http://httpd.apache.org/docs/1.3/logs.html
http://statmodeling.com/regular-expression-for-apache-log-parsing.html
http://httpd.apache.org/docs/1.3/logs.html



var regexIP = \b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b;


^: Match beginning of each line.
([0-9.]+)s: Match IP address.
([w. -]+)s: Match identity or -.
([w. -] +)s: Match userid or -.
([[^[]]+])s or ([.+])s: Match time.
“((?:[^”]|”)+)”s: Match request message. There may escaped double quotes ” appear in double quotes.
(d{3})s: Match status code.
(d+|-)s: Match response byte count or -.
“((?:[^”]|”)+)”s: Match “Referer” request header. There may escaped double quotes ” appear in double quotes. “
“((?:[^”]|”)+)”: Match “User-Agent” request header. There may escaped double quotes ” appear in double quotes.”
$: Matches end of line.
The final regular expression is:

^([0-9.]+)s([w.-]+)s([w.-]+)s([[^[]]+])s”((?:[^”]|”)+)”s(d{3})s(d+|-)s”((?:[^”]|”)+)”s”((?:[^”]|”)+)”$


/^(\S+) (\S+) (\S+) \[([^:]+):(\d+:\d+:\d+) ([^\]]+)\] \"(\S+) (.*?) (\S+)\" (\S+) (\S+) "([^"]*)" "([^"]*)"$/.exec('127.0.0.1 - - [01/Jun/2004:20:57:40 +0200] "GET / HTTP/1.1" 200 1456 "-" "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.6) Gecko/20040517 Galeon/1.3.14"')
