var catsClickerKnockOut = catsClickerKnockOut || {};

catsClickerKnockOut.catsData = [
	{
			clickCount: 0,
			imgSrc: "img/cat0.jpg",
			catTitle: "EL GATO SUPREME",
			nicknames: [{nickname: "Nacho"}, {nickname: "Gatito"}, {nickname: "El Rey"}]
	},
	{
			clickCount: 0,
			imgSrc: "img/cat1.jpg",
			catTitle: "Amuricat",
			nicknames: [{nickname: "Washington"}, {nickname: "Abraham"}, {nickname: "Eagle"}]
	},
	{
			clickCount: 0,
			imgSrc: "img/cat2.jpg",
			catTitle: "Catonese",
			nicknames: [{nickname: "Kawaii"}, {nickname: "Nani"}, {nickname: "Doshda"}]
	},
	{
			clickCount: 0,
			imgSrc: "img/cat3.jpg",
			catTitle: "Vanilla cat",
			nicknames: [{nickname: "Meow"}, {nickname: "Purr"}, {nickname: "Kitty"}]
	},
	{
			clickCount: 0,
			imgSrc: "img/cat4.jpg",
			catTitle: "Canadicat",
			nicknames: [{nickname: "Maple"}, {nickname: "Puck"}, {nickname: "Eh"}]
	}	

];
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
		var self = this;
		this.catList = ko.observableArray([]);

		catsClickerKnockOut.catsData.forEach(function(cat){
			self.catList().push(new catsClickerKnockOut.catObj(cat));
		});
		
		this.currentCat = ko.observable(this.catList()[0]);
	},
	updateClickCount: function(){
		this.clickCount(this.clickCount() + 1);
	},
	changeCat: function(){
		catsClickerKnockOut.viewModel.currentCat(this);
	}
};

catsClickerKnockOut.viewModel.init();

ko.applyBindings(catsClickerKnockOut.viewModel);