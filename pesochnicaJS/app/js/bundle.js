(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

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

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9wZXNvY2huaWNhSlMvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0MsU0FBUyxZQUFULENBQXNCLEdBQXRCLEVBQTJCO0FBQ3hCLE1BQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFqQjtBQUFBLE1BQ0ksVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFKLENBQVUsRUFBVixFQUFjLE9BQWQsR0FBd0IsSUFBeEIsQ0FBNkIsRUFBN0IsQ0FEakIsQ0FEd0IsQ0FFMkI7O0FBQ25ELE1BQUksVUFBVSxJQUFJLEdBQWxCLEVBQXVCO0FBQ3JCLFdBQU8sS0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsSUFBSSxHQUFHLFlBQVksQ0FBQyxXQUFELENBQW5CO0FBQ0EsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFELENBQXBCO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsUUFBUSxDQUFDLEtBQVQsQ0FBZSwwQkFBMEIsUUFBMUIsR0FBcUMsSUFBckMsR0FBNEMsVUFBNUMsR0FBeUQsS0FBeEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGxldCBhZ2U9cHJvbXB0KCfQktCy0LXQtNC40YLQtSDQstCw0Ygg0LLQvtC30YDQsNGB0YI/Jyk7XHJcbi8vIHN3aXRjaCAodHJ1ZSkge1xyXG5cclxuLy8gXHRjYXNlIChhZ2U+PTAgJiYgYWdlPD0yKTpcclxuLy8gXHRhbGVydCgn0JLRiyDRgNC10LHRkdC90L7QuicpO1xyXG4vLyBcdGJyZWFrO1xyXG5cclxuLy8gXHRjYXNlIChhZ2U+PTIgJiYgYWdlPD0xMik6XHJcbi8vIFx0YWxlcnQoJ9CS0Ysg0YDQtdCx0ZHQvdC+0Log0L7RgiAyINC00L4gMTLQu9C10YInKTtcclxuLy8gXHRicmVhaztcclxuXHJcbi8vIFx0Y2FzZSAoYWdlPj0xMiAmJiBhZ2U8PTE4KTpcclxuLy8gXHRhbGVydCgn0JLRiyDQv9C+0LTRgNC+0YHRgtC+0LonKTtcclxuLy8gXHRicmVhaztcclxuXHJcbi8vIFx0Y2FzZSAoYWdlPj0xOCAmJiBhZ2U8PTYwKTpcclxuLy8gXHRhbGVydCgn0JLRiyDQstC30YDQvtGB0LvRi9C5Jyk7XHJcbi8vIFx0YnJlYWs7XHJcblxyXG4vLyBcdGNhc2UgKGFnZT49NjApOlxyXG4vLyBcdGFsZXJ0KCfQktGLINC/0LXQvdGB0LjQvtC90LXRgCcpO1xyXG4vLyBcdGJyZWFrO1xyXG4vLyB9XHJcblxyXG4vLyBsZXQgbnVtYmVyPXByb21wdCgn0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQviDQvtGCIDAg0LTQviA5Jyk7XHJcbi8vIHN3aXRjaCAgKHRydWUpIHtcclxuLy8gXHRjYXNlIG51bWJlciA9PSAwOlxyXG4vLyBcdGFsZXJ0KCcpJyk7XHJcbi8vIFx0YnJlYWs7XHJcbi8vIFx0Y2FzZSBudW1iZXIgPT0gMTpcclxuLy8gXHRhbGVydCgnIScpO1xyXG4vLyBcdGJyZWFrO1xyXG4vLyBcdGNhc2UgbnVtYmVyID09IDI6XHJcbi8vIFx0YWxlcnQoJ0AnKTtcclxuLy8gXHRicmVhaztcclxuLy8gXHRjYXNlIG51bWJlciA9PSAzOlxyXG4vLyBcdGFsZXJ0KCcjJyk7XHJcbi8vIFx0YnJlYWs7XHJcbi8vIFx0Y2FzZSBudW1iZXIgPT0gNDpcclxuLy8gXHRhbGVydCgnJCcpO1xyXG4vLyBcdGJyZWFrO1xyXG4vLyBcdGNhc2UgbnVtYmVyID09IDU6XHJcbi8vIFx0YWxlcnQoJyUnKTtcclxuLy8gXHRicmVhaztcclxuLy8gXHRjYXNlIG51bWJlciA9PSA2OlxyXG4vLyBcdGFsZXJ0KCdeJyk7XHJcbi8vIFx0YnJlYWs7XHJcbi8vIFx0Y2FzZSBudW1iZXIgPT0gNzpcclxuLy8gXHRhbGVydCgnJicpO1xyXG4vLyBcdGJyZWFrO1xyXG4vLyBcdGNhc2UgbnVtYmVyID09IDg6XHJcbi8vIFx0YWxlcnQoJyonKTtcclxuLy8gXHRicmVhaztcclxuLy8gXHRjYXNlIG51bWJlciA9PSA5OlxyXG4vLyBcdGFsZXJ0KCcoJyk7XHJcbi8vIFx0YnJlYWs7XHJcbi8vIH1cclxuXHJcblxyXG4gZnVuY3Rpb24gaXNQYWxpbmRyb21lKHN0cikge1xyXG4gICAgdmFyIHN0ckxlbiA9IHN0ci5sZW5ndGgsXHJcbiAgICAgICAgc3RyUmV2ZXJzZSA9IHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpOyAvL9Cg0LDQt9Cx0LjQstCw0LXQvCDRgdGC0YDQvtC60YMg0L/QvtGB0LjQvNCy0L7Qu9GM0L3QviAg0Lgg0L/RgNC10LLRgNCw0YnQsNC10Lwg0LXQtSDQsiDQvNCw0YHRgdC40LIg0YEg0L/QvtC80L7RidGM0Y4gc3BsaXQoJycpLCDQv9C+0YLQvtC8INC/0YDQuNC80LXQvdGP0LXQvCDQuiDQvdC10LzRgyDQvNC10YLQvtC0IHJldmVyc2UoKSDQuCDRgdC+0LHQuNGA0LDQtdC8INCy0YHQtSDRgdC40LzQstC+0LvRiyDQsiDRgdGC0YDQvtC60YMg0YEg0L/QvtC80L7RidGM0Y4gam9pbignJylcclxuICAgIGlmIChzdHJSZXZlcnNlID09IHN0cikge1xyXG4gICAgICByZXR1cm4gJ3llcyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ25vJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlc3QgPSBpc1BhbGluZHJvbWUoJ2FiY2RlZGNiYScpO1xyXG4gIHRlc3QyID0gaXNQYWxpbmRyb21lKCdhYmNkZWQnKTtcclxuXHJcbiAgY29uc29sZS5sb2codGVzdCk7XHJcbiAgY29uc29sZS5sb2codGVzdDIpO1xyXG4gIGRvY3VtZW50LndyaXRlKCdpc1BhbGluZHJvbWUgcmVzdWx0OiAnICsgJ3N0ciAtICcgKyB0ZXN0ICsgJyBzdHIyIC0gJyArIHRlc3QyKTsiXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OXdaWE52WTJodWFXTmhTbE12YzNKakwycHpMMkZ3Y0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3TzBGRFFVRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSME1zVTBGQlV5eFpRVUZVTEVOQlFYTkNMRWRCUVhSQ0xFVkJRVEpDTzBGQlEzaENMRTFCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZxUWp0QlFVRkJMRTFCUTBrc1ZVRkJWU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZLTEVOQlFWVXNSVUZCVml4RlFVRmpMRTlCUVdRc1IwRkJkMElzU1VGQmVFSXNRMEZCTmtJc1JVRkJOMElzUTBGRWFrSXNRMEZFZDBJc1EwRkZNa0k3TzBGQlEyNUVMRTFCUVVrc1ZVRkJWU3hKUVVGSkxFZEJRV3hDTEVWQlFYVkNPMEZCUTNKQ0xGZEJRVThzUzBGQlVEdEJRVU5FTEVkQlJrUXNUVUZGVHp0QlFVTk1MRmRCUVU4c1NVRkJVRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNTVUZCU1N4SFFVRkhMRmxCUVZrc1EwRkJReXhYUVVGRUxFTkJRVzVDTzBGQlEwRXNTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGRUxFTkJRWEJDTzBGQlJVRXNUMEZCVHl4RFFVRkRMRWRCUVZJc1EwRkJXU3hKUVVGYU8wRkJRMEVzVDBGQlR5eERRVUZETEVkQlFWSXNRMEZCV1N4TFFVRmFPMEZCUTBFc1VVRkJVU3hEUVVGRExFdEJRVlFzUTBGQlpTd3dRa0ZCTUVJc1VVRkJNVUlzUjBGQmNVTXNTVUZCY2tNc1IwRkJORU1zVlVGQk5VTXNSMEZCZVVRc1MwRkJlRVVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJSElvWlN4dUxIUXBlMloxYm1OMGFXOXVJRzhvYVN4bUtYdHBaaWdoYmx0cFhTbDdhV1lvSVdWYmFWMHBlM1poY2lCalBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVTdhV1lvSVdZbUptTXBjbVYwZFhKdUlHTW9hU3doTUNrN2FXWW9kU2x5WlhSMWNtNGdkU2hwTENFd0tUdDJZWElnWVQxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzJrclhDSW5YQ0lwTzNSb2NtOTNJR0V1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhoZlhaaGNpQndQVzViYVYwOWUyVjRjRzl5ZEhNNmUzMTlPMlZiYVYxYk1GMHVZMkZzYkNod0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b2NpbDdkbUZ5SUc0OVpWdHBYVnN4WFZ0eVhUdHlaWFIxY200Z2J5aHVmSHh5S1gwc2NDeHdMbVY0Y0c5eWRITXNjaXhsTEc0c2RDbDljbVYwZFhKdUlHNWJhVjB1Wlhod2IzSjBjMzFtYjNJb2RtRnlJSFU5WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlN4cFBUQTdhVHgwTG14bGJtZDBhRHRwS3lzcGJ5aDBXMmxkS1R0eVpYUjFjbTRnYjMxeVpYUjFjbTRnY24wcEtDa2lMQ0l2THlCc1pYUWdZV2RsUFhCeWIyMXdkQ2duMEpMUXN0QzEwTFRRdU5HQzBMVWcwTExRc05HSUlOQ3kwTDdRdDlHQTBMRFJnZEdDUHljcE8xeHlYRzR2THlCemQybDBZMmdnS0hSeWRXVXBJSHRjY2x4dVhISmNiaTh2SUZ4MFkyRnpaU0FvWVdkbFBqMHdJQ1ltSUdGblpUdzlNaWs2WEhKY2JpOHZJRngwWVd4bGNuUW9KOUNTMFlzZzBZRFF0ZEN4MFpIUXZkQyswTG9uS1R0Y2NseHVMeThnWEhSaWNtVmhhenRjY2x4dVhISmNiaTh2SUZ4MFkyRnpaU0FvWVdkbFBqMHlJQ1ltSUdGblpUdzlNVElwT2x4eVhHNHZMeUJjZEdGc1pYSjBLQ2ZRa3RHTElOR0EwTFhRc2RHUjBMM1F2dEM2SU5DKzBZSWdNaURRdE5DK0lERXkwTHZRdGRHQ0p5azdYSEpjYmk4dklGeDBZbkpsWVdzN1hISmNibHh5WEc0dkx5QmNkR05oYzJVZ0tHRm5aVDQ5TVRJZ0ppWWdZV2RsUEQweE9DazZYSEpjYmk4dklGeDBZV3hsY25Rb0o5Q1MwWXNnMEwvUXZ0QzAwWURRdnRHQjBZTFF2dEM2SnlrN1hISmNiaTh2SUZ4MFluSmxZV3M3WEhKY2JseHlYRzR2THlCY2RHTmhjMlVnS0dGblpUNDlNVGdnSmlZZ1lXZGxQRDAyTUNrNlhISmNiaTh2SUZ4MFlXeGxjblFvSjlDUzBZc2cwTExRdDlHQTBMN1JnZEM3MFl2UXVTY3BPMXh5WEc0dkx5QmNkR0p5WldGck8xeHlYRzVjY2x4dUx5OGdYSFJqWVhObElDaGhaMlUrUFRZd0tUcGNjbHh1THk4Z1hIUmhiR1Z5ZENnbjBKTFJpeURRdjlDMTBMM1JnZEM0MEw3UXZkQzEwWUFuS1R0Y2NseHVMeThnWEhSaWNtVmhhenRjY2x4dUx5OGdmVnh5WEc1Y2NseHVMeThnYkdWMElHNTFiV0psY2oxd2NtOXRjSFFvSjlDUzBMTFF0ZEMwMExqUmd0QzFJTkdIMExqUmdkQzcwTDRnMEw3UmdpQXdJTkMwMEw0Z09TY3BPMXh5WEc0dkx5QnpkMmwwWTJnZ0lDaDBjblZsS1NCN1hISmNiaTh2SUZ4MFkyRnpaU0J1ZFcxaVpYSWdQVDBnTURwY2NseHVMeThnWEhSaGJHVnlkQ2duS1NjcE8xeHlYRzR2THlCY2RHSnlaV0ZyTzF4eVhHNHZMeUJjZEdOaGMyVWdiblZ0WW1WeUlEMDlJREU2WEhKY2JpOHZJRngwWVd4bGNuUW9KeUVuS1R0Y2NseHVMeThnWEhSaWNtVmhhenRjY2x4dUx5OGdYSFJqWVhObElHNTFiV0psY2lBOVBTQXlPbHh5WEc0dkx5QmNkR0ZzWlhKMEtDZEFKeWs3WEhKY2JpOHZJRngwWW5KbFlXczdYSEpjYmk4dklGeDBZMkZ6WlNCdWRXMWlaWElnUFQwZ016cGNjbHh1THk4Z1hIUmhiR1Z5ZENnbkl5Y3BPMXh5WEc0dkx5QmNkR0p5WldGck8xeHlYRzR2THlCY2RHTmhjMlVnYm5WdFltVnlJRDA5SURRNlhISmNiaTh2SUZ4MFlXeGxjblFvSnlRbktUdGNjbHh1THk4Z1hIUmljbVZoYXp0Y2NseHVMeThnWEhSallYTmxJRzUxYldKbGNpQTlQU0ExT2x4eVhHNHZMeUJjZEdGc1pYSjBLQ2NsSnlrN1hISmNiaTh2SUZ4MFluSmxZV3M3WEhKY2JpOHZJRngwWTJGelpTQnVkVzFpWlhJZ1BUMGdOanBjY2x4dUx5OGdYSFJoYkdWeWRDZ25YaWNwTzF4eVhHNHZMeUJjZEdKeVpXRnJPMXh5WEc0dkx5QmNkR05oYzJVZ2JuVnRZbVZ5SUQwOUlEYzZYSEpjYmk4dklGeDBZV3hsY25Rb0p5WW5LVHRjY2x4dUx5OGdYSFJpY21WaGF6dGNjbHh1THk4Z1hIUmpZWE5sSUc1MWJXSmxjaUE5UFNBNE9seHlYRzR2THlCY2RHRnNaWEowS0NjcUp5azdYSEpjYmk4dklGeDBZbkpsWVdzN1hISmNiaTh2SUZ4MFkyRnpaU0J1ZFcxaVpYSWdQVDBnT1RwY2NseHVMeThnWEhSaGJHVnlkQ2duS0NjcE8xeHlYRzR2THlCY2RHSnlaV0ZyTzF4eVhHNHZMeUI5WEhKY2JseHlYRzVjY2x4dUlHWjFibU4wYVc5dUlHbHpVR0ZzYVc1a2NtOXRaU2h6ZEhJcElIdGNjbHh1SUNBZ0lIWmhjaUJ6ZEhKTVpXNGdQU0J6ZEhJdWJHVnVaM1JvTEZ4eVhHNGdJQ0FnSUNBZ0lITjBjbEpsZG1WeWMyVWdQU0J6ZEhJdWMzQnNhWFFvSnljcExuSmxkbVZ5YzJVb0tTNXFiMmx1S0NjbktUc2dMeS9Rb05DdzBMZlFzZEM0MExMUXNOQzEwTHdnMFlIUmd0R0EwTDdRdXRHRElOQy8wTDdSZ2RDNDBMelFzdEMrMEx2UmpOQzkwTDRnSU5DNElOQy8wWURRdGRDeTBZRFFzTkdKMExEUXRkQzhJTkMxMExVZzBMSWcwTHpRc05HQjBZSFF1TkN5SU5HQklOQy8wTDdRdk5DKzBZblJqTkdPSUhOd2JHbDBLQ2NuS1N3ZzBML1F2dEdDMEw3UXZDRFF2OUdBMExqUXZOQzEwTDNSajlDMTBMd2cwTG9nMEwzUXRkQzgwWU1nMEx6UXRkR0MwTDdRdENCeVpYWmxjbk5sS0NrZzBMZ2cwWUhRdnRDeDBMalJnTkN3MExYUXZDRFFzdEdCMExVZzBZSFF1TkM4MExMUXZ0QzcwWXNnMExJZzBZSFJndEdBMEw3UXV0R0RJTkdCSU5DLzBMN1F2TkMrMFluUmpOR09JR3B2YVc0b0p5Y3BYSEpjYmlBZ0lDQnBaaUFvYzNSeVVtVjJaWEp6WlNBOVBTQnpkSElwSUh0Y2NseHVJQ0FnSUNBZ2NtVjBkWEp1SUNkNVpYTW5PMXh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlDZHVieWM3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0IwWlhOMElEMGdhWE5RWVd4cGJtUnliMjFsS0NkaFltTmtaV1JqWW1FbktUdGNjbHh1SUNCMFpYTjBNaUE5SUdselVHRnNhVzVrY205dFpTZ25ZV0pqWkdWa0p5azdYSEpjYmx4eVhHNGdJR052Ym5OdmJHVXViRzluS0hSbGMzUXBPMXh5WEc0Z0lHTnZibk52YkdVdWJHOW5LSFJsYzNReUtUdGNjbHh1SUNCa2IyTjFiV1Z1ZEM1M2NtbDBaU2duYVhOUVlXeHBibVJ5YjIxbElISmxjM1ZzZERvZ0p5QXJJQ2R6ZEhJZ0xTQW5JQ3NnZEdWemRDQXJJQ2NnYzNSeU1pQXRJQ2NnS3lCMFpYTjBNaWs3SWwxOSJ9
