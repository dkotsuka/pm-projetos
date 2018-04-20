const display = $('.display input');
const clearButton = $('.clear');
const currencyButton = $('.currency');
const buttons = Array.from(document.querySelectorAll('button'));
const numberButtons = buttons.filter(onlyNumbers);

let displayValue = "";
let currency = 'BRL';
let conversionTag = 'USD_BRL';

clearButton.addEventListener('click', function(){
	displayValue = "";
	display.value = displayValue;
	changeToState('select');
});

currencyButton.addEventListener('click',function(){
	if (currencyButton.classList.contains('select')) {
		//estado inicial
		changeCurrency();

	} else if (currencyButton.classList.contains('convert')) {
		//preparado para converter
		changeToState('converted');
		changeCurrency();
		httpResquest(convertDisplayValue);
	} else{
		//valor convertido

	}
});

numberButtons.forEach(function(item){
	item.addEventListener('click', function(){
		if (!currencyButton.classList.contains('converted')) {
			displayValue += item.innerHTML;
			display.value = formatNumber(displayValue);
			changeToState('convert');
		}
	});
});

function changeCurrency() {
	if (currencyButton.classList.contains('usd-brl')) {
		currencyButton.classList.add('brl-usd');
		currencyButton.classList.remove('usd-brl');
		currency = 'BRL';
		conversionTag = 'BRL_USD';
	} else {
		currencyButton.classList.add('usd-brl');
		currencyButton.classList.remove('brl-usd');
		currency = 'USD';
		conversionTag = 'USD_BRL';
	}
}
function changeToState(state) {
	currencyButton.classList.remove('select');
	currencyButton.classList.remove('convert');
	currencyButton.classList.remove('converted');
	currencyButton.classList.add(state);
}


function formatNumber(value){
	if (currency == 'BRL') {
		return 'R$' + (parseInt(value)/100).toLocaleString('pt-BR',{ minimumFractionDigits: 2 });
	} else {
		return '$' + (parseInt(value)/100).toLocaleString('en-US',{ minimumFractionDigits: 2 });
	}
}

function onlyNumbers(btn) {
	return btn.classList.length == 0;
}

function $(elemento) {
	return document.querySelector(elemento);
}

function convertDisplayValue(response) {
	let rate = JSON.parse(response)[conversionTag];
	console.log(rate);
	displayValue = displayValue / rate;
	display.value = formatNumber(displayValue);
}

function httpResquest(callback){
    const request = new XMLHttpRequest();
    let apiUrl = `https://free.currencyconverterapi.com/api/v5/convert?q=${conversionTag}&compact=ultra`;
    request.open('GET',apiUrl);
    request.send();
    request.onload = function(){
    	callback(request.responseText);
    }
}