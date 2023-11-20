/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",\
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Нове повідомлення додається до уснуючих.
додаткове випробування: обмежити кількість виведених повідомлень до 5,
при додаванні повіомлення після 5го, зі сторінки має зникнути найстаріше повідомлення.
*/
const button = document.getElementById("liveButton");
button.addEventListener("mouseover", mouseOverFunction);
button.addEventListener("click", mouseClickFunction);
button.addEventListener("mouseout", mouseOutFunc);

function mouseOverFunction() {
    document.getElementById("myId").innerHTML += "Mouse on me!<br>";
};

function mouseClickFunction() {
    document.getElementById("myId").innerHTML += "I was pressed!<br>";
};

function mouseOutFunc() {
    document.getElementById("myId").innerHTML += "Mouse is not on me!<br>";
};