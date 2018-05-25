function $(element, context){
	if (context) {
		return context.querySelector(element);
	} else {
		return document.querySelector(element);
	}
}