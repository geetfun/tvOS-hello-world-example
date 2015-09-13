var count = 1;

var showHelloWorld = function(count) {
	// var resource = Template.call(self, count);
	var resource = Template.call(this, count);
	var parser = new DOMParser();
	var doc = parser.parseFromString(resource, "application/xml");
	doc.addEventListener("select", function() {
		count += 1;
		var oldDoc = doc;
		var newDoc = showHelloWorld(count)
		navigationDocument.replaceDocument(newDoc, oldDoc);
	});	
  return doc;
};

App.onLaunch = function(options) {
	evaluateScripts([`http://localhost:9001/templates/hello_world.xml.js`],
		function(success) {
			var doc = showHelloWorld(count)
	    navigationDocument.pushDocument(doc);
		}
	);
};