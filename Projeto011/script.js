const height = document.querySelector('#altura');
const weight = document.querySelector('#peso');
const send = document.querySelector('#enviar');
const back = document.querySelector('#voltar');
const result_canvas = document.querySelector('#resultado');
const result_index_display = document.querySelector('#resultado_numero');
const result_text_display = document.querySelector('#resultado_texto');

result_canvas.style.display = "none";

send.addEventListener('click', function(){

	let imc = weight.value / (height.value * height.value);
	result_index_display.innerHTML = imc.toLocaleString("pt-BR", {maximumFractionDigits: 2});

	if (height.value!=0 && weight.value!=0) {
		let texto = '';
		if (imc < 16 ) {
			texto = 'Magreza grave';
		} else if (imc >= 16 && imc < 17) {
			texto = 'Magreza moderada';
		} else if (imc >= 17 && imc < 18.5) {
			texto = 'Magreza leve';
		} else if (imc >= 18.5 && imc < 25) {
			texto = 'Saudável';
		} else if (imc >= 25 && imc < 30) {
			texto = 'Sobrepeso';
		} else if (imc >= 30 && imc < 35) {
			texto = 'Obesidade';
		} else if (imc >= 35 && imc < 40) {
			texto = 'Obesidade severa';
		} else {
			texto = 'Obesidade mórbida';
		}

		result_text_display.innerHTML = texto.toUpperCase();

		send.style.display = "none";
		result_canvas.style.display = "flex";
	}

	if (height.value == 0) {
		altura.focus();
	} else if (weight.value == 0){
		peso.focus();
	}

	
});

back.addEventListener('click', function(){
	send.style.display = "block";
	result_canvas.style.display = "none";
});
