class ListManager {
	constructor(){
		this.inputBar = new InputBar();
		this.saveBar = new SaveBar();
		this.render();
	}

	saveToLocalStorage(){
		localStorage.setItem("ItemsList", JSON.stringify(this.itemList));
	}

	loadFromLocalStorage(){
		let list = [];
		const data = localStorage.getItem("ItemsList");
		if (data) {
			list = JSON.parse(data);
		}
		return list.map(item => new ListItem(item));
	}

	add(item){
		this.itemList.push(item);
		this.saveToLocalStorage();
		this.render();
	}

	remove(index){
		this.itemList.splice(index);
	}

	render(){
		this.itemList = this.loadFromLocalStorage();
		this.itemList.forEach(function(item, index){
			$("#itemsList").innerHTML += `<li id="_${index}"></li>`;
		});

		this.itemList.forEach(function(item, index){
			item.render($(`#_${index}`));
		});


	}
}