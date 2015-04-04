var fs = require('fs');

fs.readFile('access.log', function (err, logData) {

	if (err) throw err;

	var text = logData.toString(),
		lines = text.split('\n'),
		results = {},
		jsonObject = [],
		row,
		regex = /^(\S+) (\S+) (\S+) \[(\d{2}\/\w{3}\/\d{4}:\d{2}:\d{2}:\d{2} [\+|-]\d{4})\] \"(\S+ .*? \S+)\" (\d{3}) ([\d|-]+) "([^"]*)" "([^"]*)"/;

	lines.forEach(function(line) {

		results = regex.exec(line);

		if (results){
			row = {
				ip: results[1],
				available: results[2],
				userid: results[3],
				time: results[4],
				request: results[5],
				status: results[6],
				size: results[7],
				referrer: results[8],
				userAgent: results[9]
			};

			jsonObject.push(row);
		}		
	});

	var outputFilename = 'log.json';
	fs.writeFile(outputFilename, JSON.stringify(jsonObject, null, 4), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to " + outputFilename);
	    }
	}); 
});