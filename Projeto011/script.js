let height = document.querySelector('#altura');
let weight = document.querySelector('#peso');
let send = document.querySelector('#enviar');
let back = document.querySelector('#voltar');
let calc_content = document.querySelector('calcular');
let result_canvas = document.querySelector('#resultado');
let result_index_display = document.querySelector('resultado_numero');
let result_text_display = document.querySelector('resultado_texto');

send.addEventListener('click', function(height, weight){
	let imc = weight / (height*height);
	let nodes = calc_content.childNodes;
	console.log(nodes);
});
