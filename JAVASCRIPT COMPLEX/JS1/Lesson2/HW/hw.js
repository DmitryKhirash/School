// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = Math.round(Math.random() * 59);
// if (time <= 15) {
//     console.log(time, 'First quarter');
// }else if (time > 15 && time <= 30) {
//     console.log(time, 'Second quarter');
// }else if (time > 30 && time <= 45) {
//     console.log(time, 'Third quarter');
// } else if (time <= 59) {
//     console.log(time, 'Fourth quarter');
// }

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = Math.round(Math.random() * 31);
// if (day <= 10) {
//     console.log('Day -',day,'decadeFirst')
// }else if (day > 10 && day <= 20) {
//     console.log('Day -',day,'decadeSecond');
// }else if (day > 20) {
//     console.log('Day -',day,'decadeThird');
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = true;
// if (test === true) {
//     console.log("Вірно");
// }else {
//     console.log("Не вірно");
// }


//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Введіть число 1, 0, -3');
// if (a !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Не вірно');
// }

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = +prompt('Введіть день тиждня цифрою');
// switch (day) {
//     case 1:
//         console.log('Починаю бігати зранку');
//         break;
//     case 2:
//         console.log('Здача екзамену з водіння');
//         break;
//     case 3:
//         console.log('English practice');
//         break;
//     case 4:
//         console.log('Прогулянка з друзями');
//         break;
//     case 5:
//         console.log('Вчити айтішку');
//         break;
//     case 6:
//         console.log('Час прибратись');
//         break;
//     case 7:
//         console.log('Сімейний день');
//         break;
//     default:
//         console.log('Немає такого дня.')
// }
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// let year = +prompt('Введіть який рік вас цікавить');
// if ((year % 400 === 0 || year % 100 !== 0) &&(year % 4 === 0)) {
//     console.log('It is a leap year');
// } else {
//     console.log('It is not a leap year');
// }
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?')
// if (question === "ECMAScript") {
//     console.log('Правильно');
// } else {
//     console.log("Не знаєте? ECMAScript!")
// }