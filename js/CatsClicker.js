var catsClickerKnockOut = catsClickerKnockOut || {};


catsClickerKnockOut.catObj = {
	init: function(){
		this.clickCount = ko.observable(0);
		this.imgSrc = ko.observable("img/cat0.jpg");
		this.catTitle = ko.observable("EL GATO SUPREME");
		this.nicknames = ko.observableArray([
			{nickname: "Torta"},
			{nickname: "Paisa"},
			{nickname: "Chapin"}
		]);		
		this.catLevel = ko.computed(function(){
			clicks = catsClickerKnockOut.catObj.clickCount();
			if(clicks > 10 && clicks <= 20){
				return "Newborn";
			}
			else if(clicks > 20 && clicks <= 30){
				return "Infant";
			}
			else if(clicks > 30 && clicks <= 40){
				return "Toddler";
			}
			else if(clicks > 40 && clicks <= 50){
				return "Child";
			}
			else if(clicks > 50){
				return "Teen";
			}
			else{
				return "Fetus";
			}
		});
		
	}	
};

catsClickerKnockOut.viewModel = {
	updateClickCount: function(){
		catsClickerKnockOut.catObj.clickCount(catsClickerKnockOut.catObj.clickCount() + 1);
	}
};



catsClickerKnockOut.catObj.init();

ko.applyBindings(catsClickerKnockOut.viewModel);