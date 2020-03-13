// let button = document.querySelector('.button');
// button.onclick=function() {
// 	console.log('клик');
// };

//poisk elementa
var elem = document.querySelector('.button');

//sobitiya

elem.onclick = function () {
	document.querySelector('.block').style.backgroundColor = 'red'
}