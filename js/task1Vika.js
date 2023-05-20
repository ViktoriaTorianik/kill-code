// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
const btnEl = document.querySelector("#alertButton")

const inputEl = document.querySelector("#alertInput")

btnEl.addEventListener("click",onBtnClk)

function onBtnClk (){
    console.dir(inputEl)
    alert(inputEl.value)
}
