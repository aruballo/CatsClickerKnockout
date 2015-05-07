var catsClickerKnockOut = catsClickerKnockOut || {};

catsClickerKnockOut.viewModel = {
	init: function(){
		this.catTitle = ko.observable('');
		this.clickCount = ko.observable(0);
		this.imgSrc = ko.observable("img/cat0.jpg");
	},
	updateClickCount: function(){
		this.clickCount(this.clickCount() + 1);
		this.updateTitle();
	},
	updateTitle: function(){
		if(this.clickCount() > 10 && this.clickCount() <= 20){
			this.catTitle("Newborn");
		}
		else if(this.clickCount() > 20 && this.clickCount() <= 30){
			this.catTitle("Infant");
		}
		else if(this.clickCount() > 30 && this.clickCount() <= 40){
			this.catTitle("Toddler");
		}
		else if(this.clickCount() > 40 && this.clickCount() <= 50){
			this.catTitle("Child");
		}
		else if(this.clickCount() > 50){
			this.catTitle("Teen");
		}
		else{
			this.catTitle("Fetus");
		}
	}
};

catsClickerKnockOut.viewModel.init();

ko.applyBindings(catsClickerKnockOut.viewModel);