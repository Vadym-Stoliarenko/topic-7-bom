/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */
function changeCSS() {
    let textElement = document.getElementById("text");

    textElement.style.color = "orange";
    textElement.style.fontSize = "20px";
    textElement.style.fontFamily = "Comic Sans MS";
  }
  
  let buttonElement = document.querySelector('button');
  
  buttonElement.addEventListener('click', changeCSS);