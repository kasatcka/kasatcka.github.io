<<<<<<< HEAD
// let name=prompt('whats you name?');
// let surname=prompt('whats you surname?');
// let fullName=name+' '+surname;
// console.log(fullName);

// let color=prompt('what color now?');

// if (color == 'green') {
// 	console.log('you can go!');
// } else if (color =='yellow') {
// 	console.log('what');
// } else if (color == 'red') {
// 	console.log('stop');
// }else {
// 	console.log('???????');
// }



// let color=prompt('what color now?');

// if (color == 'green'){
// 	let isCarsOnTheRoad=confirm('road is clear?')
// 	if (isCarsOnTheRoad) {
// 		console.log('you can go!!!');
// 	} else {
// 		console.log('please what');
// 	}
// }


// let color=prompt('what color now?');
// let isRoadClear=confirm('isRoadClear?');

// if (color == 'green' && isRoadClear){
// 	console.log('you can go!!!');
// } else if (color =='yellow') {
// 	console.log('what');
// } else if (color == 'red') {
// 	console.log('stop');
// }else {
// 	console.log('please what until road is clear');
// }

// for (var i = 0; i < 50; i++) {
// 	console.log('hello');
// 	}


// let numbers = [-250,11,34,78,18,68];
// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i]);
// }


let products = [
{
	img:'https://image.shutterstock.com/image-vector/splash-milk-glass-260nw-1081324892.jpg' ,
	title:'milk', 
	price:29
},
{
	img:'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2008/01/easy-bread.jpg?itok=raq7Qdim' ,
	title:'bread', 
	price:13
},
{
	img:'https://images.theconversation.com/files/99753/original/image-20151026-18435-11ee0q4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip' ,
	title:'sugar', 
	price:14
},
{
	img:'https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/10/redMeat-849360782-770x553-650x428.jpg' ,
	title:'meet', 
	price:290
},
{
	img:'https://lh3.googleusercontent.com/proxy/5joNoOB5pfqPsOL8waETPUMJY2aCsUr1UkgBx4ymStQusCIU92K3LUOiBPBq4gl1NFJbGmQnPvacEnWawzQRMiPAEdiMtz55LDM9xhT4eu85jLyi' ,
	title:'salt', 
	price:10
},
{
	img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/13/0/FN_tomatoes-thinkstock_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371616351150.jpeg' ,
	title:'tomato', 
	price:45
},
];

// <div>
// 		<h1>title</h1>
// 		<div>price</div>
// 		<img src="" alt="">


	// <a href="#">купить</a>
// 	</div>

// for (var i = 0; i < products.length; i++) {
// 	let product=products[i];
// 	let outerDIV=document.createElement('div');

// 	let title=document.createElement('h1');
// 	title.innerText=product.title;

// 	let price=document.createElement('h2');
// 	price.innerText=product.price;

// 	let img=document.createElement('img');
// 	img.src=product.img;

// 	let a=document.createElement('a');
// 	a.innerText='купить';

// 	outerDIV.appendChild(title);
// 	outerDIV.appendChild(price);
// 	outerDIV.appendChild(img);
// 	outerDIV.appendChild(a);

// 	document.body.appendChild (outerDIV);
// }





for (var i = 0; i < products.length; i++) {
	let product=products[i];
	let outerDIV=document.createElement('div');
	outerDIV.className="cards";


	let title=document.createElement('h1');
	title.innerText=product.title;

	let price=document.createElement('div');
	price.innerText=product.price;


	let img=document.createElement('img');
	img.src=product.img;

	let a=document.createElement('a');
	a.innerText='купить';

	outerDIV.appendChild(title);
	outerDIV.appendChild(price);
	outerDIV.appendChild(img);
	outerDIV.appendChild(a);

	document.body.appendChild (outerDIV);
=======
// let button = document.querySelector('.button');
// button.onclick=function() {
// 	console.log('клик');
// };

//poisk elementa
var elem = document.querySelector('.button');

//sobitiya

elem.onclick = function () {
	document.querySelector('.block').style.backgroundColor = 'red'
>>>>>>> 02899c5b10a274862ddb71319699d55ac9f742b1
}