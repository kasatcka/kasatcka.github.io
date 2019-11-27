//name
let name=prompt('Как Вас зовут?');
alert('Привет'+" "+name+'!');

//born
let yearsBorn=prompt('В каком году вы родились?');
if (yearsBorn===''|| yearsBorn===null) {
	alert('Укажите Ваш год рождения');
}
else {
	const yearsNow=2019;
	let years=yearsNow-yearsBorn;
	alert('Вам '+years+' лет!');
}

//perimetr
let large=prompt('Задайте длинну стороны квадрата');
let perimetr=large*4;
alert('Периметр равен'+" " +perimetr);

//kolo
let radius=prompt('Введите радиус окружности');
let kolo=Math.pow(radius,2)*3.14;
alert('Площадь равна'+" " +kolo);

//speed
let km=prompt('Введите расстояние между городами км');
let time=prompt('Введите время которое вы хотите потратить на дорогу часов');
let speed=km/time;
alert('Необходимая скорость'+" " +speed+'км/ч');

//kurs
let dollar=prompt('Введите сумму для обмена');
const dollarKurs=23.90;
const euroKurs=26.10;
let euro=dollar*dollarKurs/euroKurs;
alert('Итого:'+" " +euro+" "+'евро');

//fleshka
let fleshka=prompt('Укажите объём флешки в Гб');
let konvertMb=fleshka*1024;
const file=820;
let colichestvo=Math.trunc(konvertMb/file);
alert('На флешку поместиться'+" " +colichestvo+" "+'файла(ов)');


//shokolad
let cashel=prompt('Введите сумму денег в кошельке');
let price=prompt('Введите цену шоколадки');
let kol=Math.trunc(cashel/price);
let lastCash=cashel%price;
alert('Денег хватит на'+" " +kol+" "+'шоколадки, остаток'+" " +lastCash);

//convert
let a=prompt('Введите число');
alert(('' + a).split('').reverse().join(''));

//deposit
let vklad=prompt('Введите сумму вклада');
const procent=5/12;
let suma=(vklad*procent)/100*2;
alert('Сумма начисленных процентов'+" " +suma);
