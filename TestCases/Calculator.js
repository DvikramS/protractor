describe("Login", function(){
	var data = require("../DataDrive/Data.js");
	var using = require("jasmine-data-provider");
	var calObject = require("../PageObjects/CalculatorObject.js");
	beforeEach(function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	});
	
	using(data.DataForLogin, function(dto,description){
	it("validAddion "+description, function(){
		calObject.doLogin(dto.firstValue, dto.secondValue);
		
		element.all(by.repeater('result in memory')).each(function(ele) {
			expect(ele.element(by.css('td:nth-child(3)')).getText()).toBe(dto.result);
		})

		
		
	});
	});
	
	
	
});
