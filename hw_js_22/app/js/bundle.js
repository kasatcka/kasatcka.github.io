(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//name
// let name=prompt('Как Вас зовут?');
// alert('Привет'+" "+name+'!');
//born
// let yearsBorn=prompt('В каком году вы родились?');
// const yearsNow=2019;
// let years=yearsNow-yearsBorn;
// alert('Вам '+years+' лет!');
//perimetr
// let large=prompt('Задайте длинну стороны квадрата');
// let perimetr=large*4;
// alert('Периметр равен'+" " +perimetr);
//kolo
// let radius=prompt('Введите радиус окружности');
// let kolo=Math.pow(radius,2)*3.14;
// alert('Площадь равна'+" " +kolo);
//speed
// let km=prompt('Введите расстояние между городами км');
// let time=prompt('Введите время которое вы хотите потратить на дорогу часов');
// let speed=km/time;
// alert('Необходимая скорость'+" " +speed+'км/ч');
//kurs
// let dollar=prompt('Введите сумму для обмена');
// const dollarKurs=23.90;
// const euroKurs=26.10;
// let euro=dollar*dollarKurs/euroKurs;
// alert('Итого:'+" " +euro+" "+'евро');
//fleshka
// let fleshka=prompt('Укажите объём флешки в Гб');
// let konvertMb=fleshka*1024;
// const file=820;
// let colichestvo=Math.trunc(konvertMb/file);
// alert('На флешку поместиться'+" " +colichestvo+" "+'файла(ов)');
//shokolad
// let cash=prompt('Введите сумму денег в кошельке');
// let price=prompt('Введите цену шоколадки');
// let kol=Math.trunc(cash/price);
// let lastCash=cash%price;
// alert('Денег хватит на'+" " +kol+" "+'шоколадки, остаток'+" " +lastCash);
//deposit
// let cash=prompt('Введите сумму вклада');
// const procent=5/12;
// let suma=(cash*procent)/100*2;
// alert('Сумма начисленных процентов'+" " +suma);
"use strict";

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9od19qc18yMi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9uYW1lXHJcbi8vIGxldCBuYW1lPXByb21wdCgn0JrQsNC6INCS0LDRgSDQt9C+0LLRg9GCPycpO1xyXG4vLyBhbGVydCgn0J/RgNC40LLQtdGCJytcIiBcIituYW1lKychJyk7XHJcblxyXG4vL2Jvcm5cclxuLy8gbGV0IHllYXJzQm9ybj1wcm9tcHQoJ9CSINC60LDQutC+0Lwg0LPQvtC00YMg0LLRiyDRgNC+0LTQuNC70LjRgdGMPycpO1xyXG4vLyBjb25zdCB5ZWFyc05vdz0yMDE5O1xyXG4vLyBsZXQgeWVhcnM9eWVhcnNOb3cteWVhcnNCb3JuO1xyXG4vLyBhbGVydCgn0JLQsNC8ICcreWVhcnMrJyDQu9C10YIhJyk7XHJcblxyXG4vL3BlcmltZXRyXHJcbi8vIGxldCBsYXJnZT1wcm9tcHQoJ9CX0LDQtNCw0LnRgtC1INC00LvQuNC90L3RgyDRgdGC0L7RgNC+0L3RiyDQutCy0LDQtNGA0LDRgtCwJyk7XHJcbi8vIGxldCBwZXJpbWV0cj1sYXJnZSo0O1xyXG4vLyBhbGVydCgn0J/QtdGA0LjQvNC10YLRgCDRgNCw0LLQtdC9JytcIiBcIiArcGVyaW1ldHIpO1xyXG5cclxuLy9rb2xvXHJcbi8vIGxldCByYWRpdXM9cHJvbXB0KCfQktCy0LXQtNC40YLQtSDRgNCw0LTQuNGD0YEg0L7QutGA0YPQttC90L7RgdGC0LgnKTtcclxuLy8gbGV0IGtvbG89TWF0aC5wb3cocmFkaXVzLDIpKjMuMTQ7XHJcbi8vIGFsZXJ0KCfQn9C70L7RidCw0LTRjCDRgNCw0LLQvdCwJytcIiBcIiAra29sbyk7XHJcblxyXG4vL3NwZWVkXHJcbi8vIGxldCBrbT1wcm9tcHQoJ9CS0LLQtdC00LjRgtC1INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LPQvtGA0L7QtNCw0LzQuCDQutC8Jyk7XHJcbi8vIGxldCB0aW1lPXByb21wdCgn0JLQstC10LTQuNGC0LUg0LLRgNC10LzRjyDQutC+0YLQvtGA0L7QtSDQstGLINGF0L7RgtC40YLQtSDQv9C+0YLRgNCw0YLQuNGC0Ywg0L3QsCDQtNC+0YDQvtCz0YMg0YfQsNGB0L7QsicpO1xyXG4vLyBsZXQgc3BlZWQ9a20vdGltZTtcclxuLy8gYWxlcnQoJ9Cd0LXQvtCx0YXQvtC00LjQvNCw0Y8g0YHQutC+0YDQvtGB0YLRjCcrXCIgXCIgK3NwZWVkKyfQutC8L9GHJyk7XHJcblxyXG4vL2t1cnNcclxuLy8gbGV0IGRvbGxhcj1wcm9tcHQoJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LTQu9GPINC+0LHQvNC10L3QsCcpO1xyXG4vLyBjb25zdCBkb2xsYXJLdXJzPTIzLjkwO1xyXG4vLyBjb25zdCBldXJvS3Vycz0yNi4xMDtcclxuLy8gbGV0IGV1cm89ZG9sbGFyKmRvbGxhckt1cnMvZXVyb0t1cnM7XHJcbi8vIGFsZXJ0KCfQmNGC0L7Qs9C+OicrXCIgXCIgK2V1cm8rXCIgXCIrJ9C10LLRgNC+Jyk7XHJcblxyXG4vL2ZsZXNoa2FcclxuLy8gbGV0IGZsZXNoa2E9cHJvbXB0KCfQo9C60LDQttC40YLQtSDQvtCx0YrRkdC8INGE0LvQtdGI0LrQuCDQsiDQk9CxJyk7XHJcbi8vIGxldCBrb252ZXJ0TWI9Zmxlc2hrYSoxMDI0O1xyXG4vLyBjb25zdCBmaWxlPTgyMDtcclxuLy8gbGV0IGNvbGljaGVzdHZvPU1hdGgudHJ1bmMoa29udmVydE1iL2ZpbGUpO1xyXG4vLyBhbGVydCgn0J3QsCDRhNC70LXRiNC60YMg0L/QvtC80LXRgdGC0LjRgtGM0YHRjycrXCIgXCIgK2NvbGljaGVzdHZvK1wiIFwiKyfRhNCw0LnQu9CwKNC+0LIpJyk7XHJcblxyXG5cclxuLy9zaG9rb2xhZFxyXG4vLyBsZXQgY2FzaD1wcm9tcHQoJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LTQtdC90LXQsyDQsiDQutC+0YjQtdC70YzQutC1Jyk7XHJcbi8vIGxldCBwcmljZT1wcm9tcHQoJ9CS0LLQtdC00LjRgtC1INGG0LXQvdGDINGI0L7QutC+0LvQsNC00LrQuCcpO1xyXG4vLyBsZXQga29sPU1hdGgudHJ1bmMoY2FzaC9wcmljZSk7XHJcbi8vIGxldCBsYXN0Q2FzaD1jYXNoJXByaWNlO1xyXG4vLyBhbGVydCgn0JTQtdC90LXQsyDRhdCy0LDRgtC40YIg0L3QsCcrXCIgXCIgK2tvbCtcIiBcIisn0YjQvtC60L7Qu9Cw0LTQutC4LCDQvtGB0YLQsNGC0L7QuicrXCIgXCIgK2xhc3RDYXNoKTtcclxuXHJcbi8vZGVwb3NpdFxyXG4vLyBsZXQgY2FzaD1wcm9tcHQoJ9CS0LLQtdC00LjRgtC1INGB0YPQvNC80YMg0LLQutC70LDQtNCwJyk7XHJcbi8vIGNvbnN0IHByb2NlbnQ9NS8xMjtcclxuLy8gbGV0IHN1bWE9KGNhc2gqcHJvY2VudCkvMTAwKjI7XHJcbi8vIGFsZXJ0KCfQodGD0LzQvNCwINC90LDRh9C40YHQu9C10L3QvdGL0YUg0L/RgNC+0YbQtdC90YLQvtCyJytcIiBcIiArc3VtYSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k5b2QxOXFjMTh5TWk5emNtTXZhbk12WVhCd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1S0NsN1puVnVZM1JwYjI0Z2NpaGxMRzRzZENsN1puVnVZM1JwYjI0Z2J5aHBMR1lwZTJsbUtDRnVXMmxkS1h0cFppZ2haVnRwWFNsN2RtRnlJR005WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlR0cFppZ2haaVltWXlseVpYUjFjbTRnWXlocExDRXdLVHRwWmloMUtYSmxkSFZ5YmlCMUtHa3NJVEFwTzNaaGNpQmhQVzVsZHlCRmNuSnZjaWhjSWtOaGJtNXZkQ0JtYVc1a0lHMXZaSFZzWlNBblhDSXJhU3RjSWlkY0lpazdkR2h5YjNjZ1lTNWpiMlJsUFZ3aVRVOUVWVXhGWDA1UFZGOUdUMVZPUkZ3aUxHRjlkbUZ5SUhBOWJsdHBYVDE3Wlhod2IzSjBjenA3ZlgwN1pWdHBYVnN3WFM1allXeHNLSEF1Wlhod2IzSjBjeXhtZFc1amRHbHZiaWh5S1h0MllYSWdiajFsVzJsZFd6RmRXM0pkTzNKbGRIVnliaUJ2S0c1OGZISXBmU3h3TEhBdVpYaHdiM0owY3l4eUxHVXNiaXgwS1gxeVpYUjFjbTRnYmx0cFhTNWxlSEJ2Y25SemZXWnZjaWgyWVhJZ2RUMWNJbVoxYm1OMGFXOXVYQ0k5UFhSNWNHVnZaaUJ5WlhGMWFYSmxKaVp5WlhGMWFYSmxMR2s5TUR0cFBIUXViR1Z1WjNSb08ya3JLeWx2S0hSYmFWMHBPM0psZEhWeWJpQnZmWEpsZEhWeWJpQnlmU2tvS1NJc0lpOHZibUZ0WlZ4eVhHNHZMeUJzWlhRZ2JtRnRaVDF3Y205dGNIUW9KOUNhMExEUXVpRFFrdEN3MFlFZzBMZlF2dEN5MFlQUmdqOG5LVHRjY2x4dUx5OGdZV3hsY25Rb0o5Q2YwWURRdU5DeTBMWFJnaWNyWENJZ1hDSXJibUZ0WlNzbklTY3BPMXh5WEc1Y2NseHVMeTlpYjNKdVhISmNiaTh2SUd4bGRDQjVaV0Z5YzBKdmNtNDljSEp2YlhCMEtDZlFraURRdXRDdzBMclF2dEM4SU5DejBMN1F0TkdESU5DeTBZc2cwWURRdnRDMDBMalF1OUM0MFlIUmpEOG5LVHRjY2x4dUx5OGdZMjl1YzNRZ2VXVmhjbk5PYjNjOU1qQXhPVHRjY2x4dUx5OGdiR1YwSUhsbFlYSnpQWGxsWVhKelRtOTNMWGxsWVhKelFtOXlianRjY2x4dUx5OGdZV3hsY25Rb0o5Q1MwTERRdkNBbkszbGxZWEp6S3ljZzBMdlF0ZEdDSVNjcE8xeHlYRzVjY2x4dUx5OXdaWEpwYldWMGNseHlYRzR2THlCc1pYUWdiR0Z5WjJVOWNISnZiWEIwS0NmUWw5Q3cwTFRRc05DNTBZTFF0U0RRdE5DNzBMalF2ZEM5MFlNZzBZSFJndEMrMFlEUXZ0QzkwWXNnMExyUXN0Q3cwTFRSZ05DdzBZTFFzQ2NwTzF4eVhHNHZMeUJzWlhRZ2NHVnlhVzFsZEhJOWJHRnlaMlVxTkR0Y2NseHVMeThnWVd4bGNuUW9KOUNmMExYUmdOQzQwTHpRdGRHQzBZQWcwWURRc05DeTBMWFF2U2NyWENJZ1hDSWdLM0JsY21sdFpYUnlLVHRjY2x4dVhISmNiaTh2YTI5c2IxeHlYRzR2THlCc1pYUWdjbUZrYVhWelBYQnliMjF3ZENnbjBKTFFzdEMxMExUUXVOR0MwTFVnMFlEUXNOQzAwTGpSZzlHQklOQyswTHJSZ05HRDBMYlF2ZEMrMFlIUmd0QzRKeWs3WEhKY2JpOHZJR3hsZENCcmIyeHZQVTFoZEdndWNHOTNLSEpoWkdsMWN5d3lLU296TGpFME8xeHlYRzR2THlCaGJHVnlkQ2duMEovUXU5QyswWW5Rc05DMDBZd2cwWURRc05DeTBMM1FzQ2NyWENJZ1hDSWdLMnR2Ykc4cE8xeHlYRzVjY2x4dUx5OXpjR1ZsWkZ4eVhHNHZMeUJzWlhRZ2EyMDljSEp2YlhCMEtDZlFrdEN5MExYUXROQzQwWUxRdFNEUmdOQ3cwWUhSZ2RHQzBMN1JqOUM5MExqUXRTRFF2TkMxMExiUXROR0RJTkN6MEw3UmdOQyswTFRRc05DODBMZ2cwTHJRdkNjcE8xeHlYRzR2THlCc1pYUWdkR2x0WlQxd2NtOXRjSFFvSjlDUzBMTFF0ZEMwMExqUmd0QzFJTkN5MFlEUXRkQzgwWThnMExyUXZ0R0MwTDdSZ05DKzBMVWcwTExSaXlEUmhkQyswWUxRdU5HQzBMVWcwTC9RdnRHQzBZRFFzTkdDMExqUmd0R01JTkM5MExBZzBMVFF2dEdBMEw3UXM5R0RJTkdIMExEUmdkQyswTEluS1R0Y2NseHVMeThnYkdWMElITndaV1ZrUFd0dEwzUnBiV1U3WEhKY2JpOHZJR0ZzWlhKMEtDZlFuZEMxMEw3UXNkR0YwTDdRdE5DNDBMelFzTkdQSU5HQjBMclF2dEdBMEw3UmdkR0MwWXduSzF3aUlGd2lJQ3R6Y0dWbFpDc24wTHJRdkMvUmh5Y3BPMXh5WEc1Y2NseHVMeTlyZFhKelhISmNiaTh2SUd4bGRDQmtiMnhzWVhJOWNISnZiWEIwS0NmUWt0Q3kwTFhRdE5DNDBZTFF0U0RSZ2RHRDBMelF2TkdESU5DMDBMdlJqeURRdnRDeDBMelF0ZEM5MExBbktUdGNjbHh1THk4Z1kyOXVjM1FnWkc5c2JHRnlTM1Z5Y3oweU15NDVNRHRjY2x4dUx5OGdZMjl1YzNRZ1pYVnliMHQxY25NOU1qWXVNVEE3WEhKY2JpOHZJR3hsZENCbGRYSnZQV1J2Ykd4aGNpcGtiMnhzWVhKTGRYSnpMMlYxY205TGRYSnpPMXh5WEc0dkx5QmhiR1Z5ZENnbjBKalJndEMrMExQUXZqb25LMXdpSUZ3aUlDdGxkWEp2SzF3aUlGd2lLeWZRdGRDeTBZRFF2aWNwTzF4eVhHNWNjbHh1THk5bWJHVnphR3RoWEhKY2JpOHZJR3hsZENCbWJHVnphR3RoUFhCeWIyMXdkQ2duMEtQUXV0Q3cwTGJRdU5HQzBMVWcwTDdRc2RHSzBaSFF2Q0RSaE5DNzBMWFJpTkM2MExnZzBMSWcwSlBRc1NjcE8xeHlYRzR2THlCc1pYUWdhMjl1ZG1WeWRFMWlQV1pzWlhOb2EyRXFNVEF5TkR0Y2NseHVMeThnWTI5dWMzUWdabWxzWlQwNE1qQTdYSEpjYmk4dklHeGxkQ0JqYjJ4cFkyaGxjM1IyYnoxTllYUm9MblJ5ZFc1aktHdHZiblpsY25STllpOW1hV3hsS1R0Y2NseHVMeThnWVd4bGNuUW9KOUNkMExBZzBZVFF1OUMxMFlqUXV0R0RJTkMvMEw3UXZOQzEwWUhSZ3RDNDBZTFJqTkdCMFk4bksxd2lJRndpSUN0amIyeHBZMmhsYzNSMmJ5dGNJaUJjSWlzbjBZVFFzTkM1MEx2UXNDalF2dEN5S1NjcE8xeHlYRzVjY2x4dVhISmNiaTh2YzJodmEyOXNZV1JjY2x4dUx5OGdiR1YwSUdOaGMyZzljSEp2YlhCMEtDZlFrdEN5MExYUXROQzQwWUxRdFNEUmdkR0QwTHpRdk5HRElOQzAwTFhRdmRDMTBMTWcwTElnMExyUXZ0R0kwTFhRdTlHTTBMclF0U2NwTzF4eVhHNHZMeUJzWlhRZ2NISnBZMlU5Y0hKdmJYQjBLQ2ZRa3RDeTBMWFF0TkM0MFlMUXRTRFJodEMxMEwzUmd5RFJpTkMrMExyUXZ0QzcwTERRdE5DNjBMZ25LVHRjY2x4dUx5OGdiR1YwSUd0dmJEMU5ZWFJvTG5SeWRXNWpLR05oYzJndmNISnBZMlVwTzF4eVhHNHZMeUJzWlhRZ2JHRnpkRU5oYzJnOVkyRnphQ1Z3Y21salpUdGNjbHh1THk4Z1lXeGxjblFvSjlDVTBMWFF2ZEMxMExNZzBZWFFzdEN3MFlMUXVOR0NJTkM5MExBbksxd2lJRndpSUN0cmIyd3JYQ0lnWENJcko5R0kwTDdRdXRDKzBMdlFzTkMwMExyUXVDd2cwTDdSZ2RHQzBMRFJndEMrMExvbksxd2lJRndpSUN0c1lYTjBRMkZ6YUNrN1hISmNibHh5WEc0dkwyUmxjRzl6YVhSY2NseHVMeThnYkdWMElHTmhjMmc5Y0hKdmJYQjBLQ2ZRa3RDeTBMWFF0TkM0MFlMUXRTRFJnZEdEMEx6UXZOR0RJTkN5MExyUXU5Q3cwTFRRc0NjcE8xeHlYRzR2THlCamIyNXpkQ0J3Y205alpXNTBQVFV2TVRJN1hISmNiaTh2SUd4bGRDQnpkVzFoUFNoallYTm9LbkJ5YjJObGJuUXBMekV3TUNveU8xeHlYRzR2THlCaGJHVnlkQ2duMEtIUmc5QzgwTHpRc0NEUXZkQ3cwWWZRdU5HQjBMdlF0ZEM5MEwzUmk5R0ZJTkMvMFlEUXZ0R0cwTFhRdmRHQzBMN1FzaWNyWENJZ1hDSWdLM04xYldFcE8xeHlYRzRpWFgwPSJ9
