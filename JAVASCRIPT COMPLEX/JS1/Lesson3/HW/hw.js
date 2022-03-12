// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let arr = [1, 2, 3, 4, 5, 'a','b','c','d','e',true, false];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. 
// Вивести в консоль
//
// let arr = [];
// arr[0] = 'online';
// arr[1] = 'offline';
// arr[2] = 5;
// arr[3] = 'user';
// console.log(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>item</div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>item${i}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>item</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>element${i}</h1>`);
//     i++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrNum = [2, 4, 6, 7, 8, 9, 4, 2, 4, 1];
// for (let n of arrNum) {
//     console.log('Number ' + n)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let str = ['comment', 'Vasya', 'Olenka', 'Ivanka', 'Angelina', 'Solomia', 'Ruslana', 'Olia', 'Tania', 'Sofia'];
// for (let eStr of str) {
//     console.log(eStr)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mix = [true, 32, 'UA', '599', false, 'element', 'brake', +12, 'potato', 9];
// for (let m of mix) {
//     console.log(m);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mixBoolean = [true, 32, 'UA', '599', false, 'element', 'brake', +12, 'potato', 9];
// for (i = 0; i < mixBoolean.length; i++) {
//     if (typeof mixBoolean[i] === 'boolean') {
//         console.log(mixBoolean[i]);
//     }
// }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mixNumbers = [true, 32, 'UA', '599', false, 'element', 'brake', +12, 'potato', 9];
// for (i = 0; i < mixNumbers.length; i++) {
//     if (typeof mixNumbers[i] === 'number') {
//         console.log(mixNumbers[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let mixSting = [true, 32, 'UA', '599', false, 'element', 'brake', +12, 'potato', 9];
// for (i = 0; i < mixSting.length; i++) {
//     if (typeof mixSting[i] === 'string') {
//         console.log(mixSting[i]);
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 1;
// array[1] = 'random';
// array[2] = true;
// array[3] = [1, 2, 3];
// array[4] = 52;
// array[5] = 'Travel';
// array[6] = '5';
// array[7] = false;
// array[8] = 'demo';
// array[9] = 'book1';
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('step :' + i + ' ');
//     document.write('step :' + i + ' ');
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('step :' + i + " ");
//     document.write('step :' + i + ' ');
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log('with step 2 - ' + i + ' ');
//     document.write('with step 2 - ' + i + ' ');
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log('Paired steps ' + i )
//         document.write('Paired steps ' + i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('Not paired steps ' + i);
//         document.write('Not paired steps ' + i);
//     }
// }