var catsClickerKnockOut = catsClickerKnockOut || {};


catsClickerKnockOut.catObj = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.imgSrc = ko.observable(data.imgSrc);
	this.catTitle = ko.observable(data.catTitle);
	this.nicknames = ko.observableArray(data.nicknames);		
	this.catLevel = ko.computed(function(){
		clicks = this.clickCount();
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
	}, this);	 
};

catsClickerKnockOut.viewModel = {
	init: function(){
		this.currentCat = ko.observable(new catsClickerKnockOut.catObj(
			{
				clickCount: 0,
				imgSrc: "img/cat0.jpg",
				catTitle: "EL GATO SUPREME",
				nicknames: [{nickname: "Nacho"}, {nickname: "Gatito"}, {nickname: "Bob"}]
			}
		));
	},
	updateClickCount: function(){
		this.clickCount(this.clickCount() + 1);
	}
};

catsClickerKnockOut.viewModel.init();

ko.applyBindings(catsClickerKnockOut.viewModel);