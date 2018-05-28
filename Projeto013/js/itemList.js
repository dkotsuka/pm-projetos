class ListItem {
	constructor(item){
		this.name = item.name;
		this.minimum = item.minimum;
		this.available = item.available;
	}

	hasToBuy(){
		return this.available < this.minimum;
	}

	render(el){
		this.el = el;
		const cssClass = this.hasToBuy() ? "lowQuantity" : "";

		el.innerHTML = $("#itemTemplate").innerHTML
		.replace(/{{lowQuantity}}/g, cssClass)
		.replace(/{{name}}/g, this.name)
		.replace(/{{minimum}}/g, this.minimum)
		.replace(/{{available}}/g, this.available);
		this.attachEvents();
	}

	attachEvents(){
		$(".itemQuantity",this.el).addEventListener("click",this.onClickItem.bind(this));
		$(".deleteItemButton",this.el).addEventListener("click",this.onClickDelete.bind(this));
		$(".addItemButton",this.el).addEventListener("click",this.onClickAdd.bind(this));
		$(".removeItemButton",this.el).addEventListener("click",this.onClickRemove.bind(this));
	}

	onClickItem(event){
		const actions = event.currentTarget.nextElementSibling;
		actions.classList.toggle("hide");
		lm.inputBar.hideMinimumSetup();
	}

	onClickDelete(){
		const id = this.el.getAttribute("id").replace("_","");
		lm.remove(parseInt(id));
	}
	onClickAdd(){
		const quantity = $(".quantity",this.el)
		quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
		this.available = parseInt(quantity.innerHTML);
		lm.saveBar.show();
	}
	onClickRemove(){
		const quantity = $(".quantity",this.el)
		if (parseInt(quantity.innerHTML) > 0) {
			quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
			this.available = parseInt(quantity.innerHTML);
			lm.saveBar.show();
		}
	}
}

