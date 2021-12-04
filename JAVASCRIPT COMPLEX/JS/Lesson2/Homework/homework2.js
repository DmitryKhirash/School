// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 33
// if (time <=15) {
//     document.write('<div><h2>The first quarter of an hour.</h2></div>');
// }else if (time <=30) {
//         document.write('<div><h2>The second quarter of an hour.</h2></div>');
// }else if (time <=45) {
//     document.write('<div><h2>The third quarter of an hour.</h2></div>');
// }else if (time <=59)
// {
//     document.write('<div><h2>The last quarter of an hour.</h2></div>');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 31
// if (day <=10) {
//     document.write('<div><h2>The first decade of the month.</h2></div>')
// }else if (day <=20){
//     document.write('<div><h2>The second decade of the month.</h2></div>')
// }else if (day <=31) {
//     document.write('<div><h2>The third decade of the month.</h2></div>')
// }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = '';
// if (!test) {
//     console.log("Вірно");
// }else {
//     console.log("Неправильно");
// }

// let test = 6 === 5 ? 'Неправильно' : 'Вірно';
// console.log(test)

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = -3.
// if (a !== 0) {
//     console.log("Вірно")
// } else {
//     console.log("Неправильно")
// }
//

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let schedule = prompt('What day is it today?')
// switch (schedule) {
//     case 'Monday':
//         console.log('Revisit the preview3');
//         break;
//     case 'Tuesday':
//         console.log('Pick up your pants');
//         break;
//     case 'Wednesday':
//         console.log('Do not forget about the gym');
//         break;
//     case 'Thursday:':
//         console.log('Go eat at last');
//         break;
//     case 'Friday':
//         console.log('This is not the end');
//         break;
//     case 'Saturday':
//         console.log('Get out of here a little');
//         break;
//     case 'Sunday':
//         console.log('Get off properly, but go to work tomorrow morning.');
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки (не) діляться націло на 4. 366/4=91,5; 365/4=91.25.


// let year = prompt('How many days this year?')
// let result = (year / 4);
// if (result === 91.5) {
//     document.write('This year is a leap year')
// }else {
//     document.write('This year is a not leap year')
// }

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?');
//  if (question==="ECMAScript"){
//      console.log("Правильно!")
//  }else {
//      console.log("Не знаєте? ECMAScript!")
//  }


