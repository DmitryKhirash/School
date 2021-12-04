// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc (a,b){
//     let result = a * b;
//     return result;
// }
// let result = calc(10, 20);
// document.write(result);
// -----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calc(pi, r) {
//     let result = pi * Math.pow(r,3)
//     return result;
// }
// let result = calc(3.14,10)
// document.write(result);

// OR

// function calc(r, pi=3.14) {
//     let result = pi * Math.pow(r,3)
//     return result;
// }
// let result = calc(20)
// document.write(result);
// -------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calc(r, h, pi=3.14) {
//     let res = 2 * pi * r * h;
//     return res;
// }
// let res = calc(30, 20);
// document.write(res);
// -------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент
// let set = ['js', 1, 'html', 20, 'developer']
// function arrElements(set){
//     for (i = 0; i < set.length; i++) {
//     }
//     return set;
// }
// document.write(set)
// -------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(text) {
//     document.write(`<p>`);
//     document.write(`<h2>${text}</h2>`);
//     document.write(`</p>`);
// }
// text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, voluptatum!`)
// ----------------------------------------------14--88---+-+-------------------------------------------------------------------


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listCreator(item) {
//     document.write(`<ul>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`</ul>`)
// }
// listCreator(`Hello,lorem ipsum dolor sit amet.`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// &&-------||---------syntactically-sugar-construction------

//     function listCreator(item,size) {
//     document.write(`<ul>`);
//         for (let i = 0; i < size; i++) {
//             document.write(`<li>${item}${i+1}</li>`);
//         }
// document.write(`</ul>`)
// }
// listCreator(`Lorem ipsum dolor sit amet.`,3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, 3, 'lsdfj', "lksv", true, false];
//
// function distribution(arrey) {
//     document.write(`<ol>`)
//     for (let i =0; i<arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`<ol>`)
// }
// distribution()
// -----------------------------------------------------------------------------------------------------------------------
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ.Для кожного об'єкту окремий блок.

// let infoPerson = [
//     {
//         id: 28762435,
//         name: 'Vasyl',
//         age: 22
//     },
//     {
//         id: 28723455,
//         name: 'Olia',
//         age: 19
//     },
//     {
//         id: 94684685,
//         name: 'Lily',
//         age: 22
//     }
// ]
// function obgPerson(info) {
//     for (const infoElement of info) {
//         document.write(`<div>${infoElement.name} - ${infoElement.age}. ID:${infoElement.id}`)
//     }
// }
// obgPerson(infoPerson)













