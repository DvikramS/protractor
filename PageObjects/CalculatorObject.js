var calculatorObj =function (){
	
	this.firstInputBox = element(by.model('first'));
	this.secondInputBox = element(by.model('second'));
	this.goButton = element(by.css("button[id='gobutton']"));
	
	this.doLogin =function(first, second){
		this.firstInputBox.sendKeys(first);
		this.secondInputBox.sendKeys(second);
	    this.goButton.click();
	}
} 

module.exports =new calculatorObj();