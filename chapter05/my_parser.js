//log from http://fossies.org/linux/source-highlight/tests/access.log

// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('access.log', function (err, logData) {
  
// If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) throw err;
  
// logData is a Buffer, convert to string.
  var text = logData.toString();

  var results = {};

  var lines = text.split('\n');

  var regex = /^(\S+) (\S+) (\S+) \[([^:]+):(\d+:\d+:\d+) ([^\]]+)\] \"(\S+) (.*?) (\S+)\" (\S+) (\S+) "([^"]*)" "([^"]*)"$/;

  lines.forEach(function(line) {
  	//console.log(line);

  	var results = regex.exec(line);

  	for (i=0; i<results.length; i++){
  		console.log(results[i]);
  	}

  });
});