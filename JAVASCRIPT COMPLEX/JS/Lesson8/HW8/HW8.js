// Візьміть файл template1.html, підключіть до нього скрипт,
//     і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let pText = document.getElementById('content');
console.log(pText.innerText);

// -- отримує текст з блоку з id "rules"
let idText = document.getElementById('rules');
console.log(idText.innerText);


// -- замініть текст параграфа з id 'content' на будь-який інший
pText.innerText = 'Lorem ЯКИЙ ЩЕ LOREM?'

// -- замініть текст параграфа з id 'rules' на будь-який інший
idText.innerText = 'Перше правило - ніяких правил'

// -- змініть кожному елементу колір фону на червоний
let backgroundRed = document.body.children;
for (const backgroundRedElement of backgroundRed) {
    backgroundRedElement.style.background = 'red'
}
// -- змініть кожному елементу колір тексту на синій
let bacBlue = document.body.children;
for (const bacBlueElement of bacBlue) {
    bacBlueElement.style.background = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let listClass = document.getElementById('rules');
console.log(listClass)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let colorText = document.getElementsByClassName('fc_rules');
for (const colorTextElement of colorText) {
    colorTextElement.style.color = 'red'
}