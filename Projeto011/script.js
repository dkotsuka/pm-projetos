let botao = document.querySelector('button');

botao.addEventListener('click', function(){
	let cor = document.querySelector('#cor').value;
	document.querySelector('body').style.backgroundColor = cor;
});