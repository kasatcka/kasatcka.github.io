// let age=prompt('Введите ваш возраст?');
// switch (true) {

// 	case (age>=0 && age<=2):
// 	alert('Вы ребёнок');
// 	break;

// 	case (age>=2 && age<=12):
// 	alert('Вы ребёнок от 2 до 12лет');
// 	break;

// 	case (age>=12 && age<=18):
// 	alert('Вы подросток');
// 	break;

// 	case (age>=18 && age<=60):
// 	alert('Вы взрослый');
// 	break;

// 	case (age>=60):
// 	alert('Вы пенсионер');
// 	break;
// }

// let number=prompt('Введите число от 0 до 9');
// switch  (true) {
// 	case number == 0:
// 	alert(')');
// 	break;
// 	case number == 1:
// 	alert('!');
// 	break;
// 	case number == 2:
// 	alert('@');
// 	break;
// 	case number == 3:
// 	alert('#');
// 	break;
// 	case number == 4:
// 	alert('$');
// 	break;
// 	case number == 5:
// 	alert('%');
// 	break;
// 	case number == 6:
// 	alert('^');
// 	break;
// 	case number == 7:
// 	alert('&');
// 	break;
// 	case number == 8:
// 	alert('*');
// 	break;
// 	case number == 9:
// 	alert('(');
// 	break;
// }


 function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join(''); //Разбиваем строку посимвольно  и превращаем ее в массив с помощью split(''), потом применяем к нему метод reverse() и собираем все символы в строку с помощью join('')
    if (strReverse == str) {
      return 'yes';
    } else {
      return 'no';
    }
  }

  test = isPalindrome('abcdedcba');
  test2 = isPalindrome('abcded');

  console.log(test);
  console.log(test2);
  document.write('isPalindrome result: ' + 'str - ' + test + ' str2 - ' + test2);