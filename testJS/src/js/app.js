// let page = document.querySelector('.page');
// let themeButton = document.querySelector('.theme-button');
// themeButton.onclick = function() {
//   page.classList.toggle('light-theme');
//   page.classList.toggle('dark-theme');
// };

// let message = document.querySelector('.subscription-message');

// let form = document.querySelector('.subscription');
// form.onsubmit = function(evt) {
//   // Инструкция ниже отменяет отправку данных
//   evt.preventDefault();
//   message.textContent = 'Форма отправлена!';

// };


let paragraph=document.querySelector('.message');

// console.log(paragraph.textContent);

let formButton=document.querySelector('.button');
formButton.onclick=function() {
	paragraph.textContent='Форма отправлена';
}