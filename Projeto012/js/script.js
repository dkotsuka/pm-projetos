const num0 = getElement('.num0');
const num1 = getElement('.num1');
const num2 = getElement('.num2');
const num3 = getElement('.num3');
const num4 = getElement('.num4');
const num5 = getElement('.num5');
const num6 = getElement('.num6');
const num7 = getElement('.num7');
const num8 = getElement('.num8');
const num9 = getElement('.num9');
const clear = getElement('.clear');
const change = getElement('.currency');
const icon = getElement('.icon');
const display = getElement('#display');

const apiKey = 'http://data.fixer.io/api/latest?access_key=8bc54595f34723d2a4c50191d2e2fd40';
const apiKey2 = 'https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL,PHP_BRL&compact=ultra';

let digits = '';
let currency = 'BRL';
let currency2 = 'USD';
let readyToCalc = false;

change.addEventListener('click', function(){
	if (readyToCalc) {
		if (digits.length<3) {
			digits *= 100;
		}
		httpResquest(apiKey);
		display.style.color = "#7ed321";
		
	}
	changeCurrency();
});



clear.addEventListener('click', function(){
	digits = '';
	updateDisplay(digits);
	change.style.backgroundColor = "#4a90e2";
	display.style.color = "#ffffff";
	readyToCalc = false;
});

num0.addEventListener('click', function(){
	updateText(0);
});

num1.addEventListener('click', function(){
	updateText(1);
});

num2.addEventListener('click', function(){
	updateText(2);
});

num3.addEventListener('click', function(){
	updateText(3);
});

num4.addEventListener('click', function(){
	updateText(4);
});

num5.addEventListener('click', function(){
	updateText(5);
});

num6.addEventListener('click', function(){
	updateText(6);
});

num7.addEventListener('click', function(){
	updateText(7);
});

num8.addEventListener('click', function(){
	updateText(8);
});

num9.addEventListener('click', function(){
	updateText(9);
});

function getElement (name){
	return document.querySelector(name);
}

function updateText(number){

	if (digits.length < 7) {
		digits += number;
	}
	let value;
	if (digits.length<3) {
		value = digits;
	} else {
		value = formatNumber(digits);
		
	}
	
	updateDisplay(value);
	change.style.backgroundColor = "#f98611";
	readyToCalc = true;
}

function updateDisplay(text){
	display.innerHTML = text;
}

function formatNumber(value){
	if (currency == 'BRL') {
			return (parseInt(value)/100).toLocaleString('pt-BR',{ minimumFractionDigits: 2 });
		} else {
			return (parseInt(value)/100).toLocaleString('en-US',{ minimumFractionDigits: 2 });
		}
}

function changeCurrency(){
	if (currency == 'BRL') {
			currency = 'USD';
			currency2 = 'BRL'
			icon.style.backgroundImage = "url('img/dolar.png')";
		} else {
			currency = 'BRL';
			currency2 = 'USD';
			icon.style.backgroundImage = "url('img/real.png')";
		}
}
function httpResquest(url){
    let request = new XMLHttpRequest();
    request.open('GET',url);
    request.send();
    request.onload = function(){
    	let rates = JSON.parse(request.responseText).rates;
    	let rate = rates[currency2] / rates[currency];
    	digits = digits / rate;
    	updateDisplay(formatNumber(digits));
    }
}
