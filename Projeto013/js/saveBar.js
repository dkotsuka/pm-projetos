class SaveBar{
	constructor(){
		this.el = $(".saveBar");
		this.attachEvents();
	}

	attachEvents(){
		$(".saveButton",this.el).addEventListener("click",this.onClickSave.bind(this));
		$(".cancelButton",this.el).addEventListener("click",this.onClickCancel.bind(this));
	}

	show(){
		this.el.classList.remove("hide");
		$(".addItem").classList.add("hide");
	}

	hide(){
		this.el.classList.add("hide");
		$(".addItem").classList.remove("hide");
	}

	onClickSave(){
		lm.saveToLocalStorage();
		lm.render();
		this.hide();
	}

	onClickCancel(){
		lm.render();
		this.hide();
	}
}