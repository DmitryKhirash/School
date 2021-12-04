// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [1, 2, 3, 4, 5];
// let strings = ['a', 'b', 'c', 'd', 'c'];
// let mixedValues = [true,false,'bread',10,100];
// console.log(numbers,strings,mixedValues)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// let x = 0;
// for (i = 0; i < 10; i++) {
//     array[i] = x;
//     x += 5;
//     console.log(x)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text </div>`);
// }
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>text ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write (`<h1>text</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 1;
// while (i <= 20) {
//     document.write (`<div>${i} text</div>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [2, 3, 24, 5, 673, 52, 347, 246, 347, 2134, 568, 1];
// for (const num of arr) {
//     console.log(num)
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let string = ['Hello', 'Bye', 'Who', 'Because', 'Cool', 'Doy', 'Duff', 'Go', 'Sky', 'Battery'];
// for (const turn of string) {
//     console.log(turn);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixed = [ 347, 246, true, 2134, 568, 1, 'Duff', 'Go', 'Sky', false];
// for (let i = 0; i < mixed.length; i++) {
//     const mixedElement = mixed[i];
//     console.log(mixedElement)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mixed = [ 347, 246, true, 2134, 568, 1, 'Duff', 'Go', 'Sky', false];
// for (let i = 0; i < mixed.length; i++) {
//     const mixItem = mixed[i];
//     if (typeof mixItem === `boolean`){
//         console.log(mixItem)
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mixed = [ 347, 246, true, 2134, 568, 1, 'Duff', 'Go', 'Sky', false];
// for (let i = 0; i < mixed.length; i++) {
//     const mixNum = mixed[i];
//     if (typeof mixNum === `number`){
//         console.log(mixNum)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mixed = [ 347, 246, true, 2134, 568, 1, 'Duff', 'Go', 'Sky', false];
// for (let i = 0; i < mixed.length; i++) {
//     const mixString = mixed[i];
//     if (typeof mixString === `string`){
//         console.log(mixString)
//     }
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`<div>number ${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`<div>number ${i}</div>`)

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i)
//     document.write(`<div>number ${i}</div>`)
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0 && i !== 0) {
//             console.log(i)
//         document.write(`<div>number ${i}</div>`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i !== 0) {
//         console.log(i)
//         document.write(`<div>number ${i}</div>`)
//     }
// }



