class InputBar {
	constructor(){
		this.el = $(".addItem");
		this.attachEvents();
	}

	attachEvents(){
		$(".itemInput",this.el).addEventListener("focus",this.onFocusInput.bind(this));
		$(".addButton",this.el).addEventListener("click",this.plusMin.bind(this));
		$(".removeButton",this.el).addEventListener("click",this.minusMin.bind(this));
		$(".saveButton",this.el).addEventListener("click",this.saveInput.bind(this));
	}

	onFocusInput(){
		this.showMinimumSetup();
	}

	hideMinimumSetup(){
		$(".setMinimum",this.el).classList.add("hide");
	}

	showMinimumSetup(){
		$(".setMinimum",this.el).classList.remove("hide");
	}

	getInput(){
		return{
			name: $(".itemInput",this.el).value,
			minimumStock: parseInt($(".minQuantity",this.el).innerHTML),
			available: 0
		}
	}

	plusMin(){
		$(".minQuantity",this.el).innerHTML = this.getInput().minimumStock + 1;
	}

	minusMin(){
		if (this.getInput().minimumStock > 1) {
			$(".minQuantity",this.el).innerHTML = this.getInput().minimumStock - 1;
		}
	}

	saveInput(){
		if (this.getInput().name.length == 0) {
			alert("Preencha o nome do produto.")
		} else {
			console.dir(this.getInput());
			this.hideMinimumSetup();
		}
		
	}
}

const i = new InputBar;