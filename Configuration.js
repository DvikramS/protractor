var Jasmine2HtmlReporter = require('wordwrap-protractor-jasmine2-html-reporter');

exports.config = {
		
 specs: ['./TestCases/Calculator.js','./TestCases/test2.js'],
  
  capabilities: {
      browserName:'chrome',
    	  framework: 'jasmine2'
  },

onPrepare: function(){
	browser.manage().window().maximize();
	
	jasmine.getEnv().addReporter(
	        new Jasmine2HtmlReporter({
	          savePath: './testReports/reports/',
	          takeScreenshots: true,
	          takeScreenshotsOnlyOnFailures: true
	        })
	      );
}
  ,
  suites:{
	  smoke :['./TestCases/Calculator.js','./TestCases/test2.js']
  }

}