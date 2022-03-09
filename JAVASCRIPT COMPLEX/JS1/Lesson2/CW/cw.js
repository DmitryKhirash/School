//
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let firstNum = +prompt('Введіть перше чиисло');
// let secondNum = +prompt('Введіть друге число');
// if (firstNum > secondNum) {
//     console.log(firstNum, "Перше число більше за друге");
// }else if (firstNum === secondNum) {
//     console.log('Ці числа однакові');
// }else if (secondNum > firstNum) {
//     console.log(secondNum, "Друге число більше за перше")
// }
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let apartment = +prompt('Enter the apartment number');
// if (apartment <= 20 && apartment >= 1) {
//     console.log('This apartment is in the first entrance');
// } else if (apartment > 20 && apartment <= 48) {
//     console.log('This apartment is in the second entrance');
// } else if (apartment > 48 && apartment <= 90) {
//     console.log('This apartment is in the third entrance');
// } else {
//     console.log('This apartment is not in this house');
// }
//
// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// (+prompt('Enter the number') === 10) ? console.log('Вірно') : console.log('Не вірно');
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temperature = +prompt('What is the temperature outside?');
// if (temperature >= +10 && temperature <= +22) {
//     console.log('We go to learn');
// } else {
//     console.log('We sit at home and study online');
// }
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
// вивести Повідомлення - що число не вірне ... .

// let quiz = +prompt('Enter a number from 1 to 5');
// switch (quiz) {
//     case 1:
//         console.log('Car');
//         break;
//     case 2:
//         console.log('Motorcycle');
//         break;
//     case 3:
//         console.log('Sel phone');
//         break;
//     case 4:
//         console.log('Ops, try again');
//         break;
//     case 5:
//         console.log('Carob key for 10');
//         break;
//     default:
//         console.log('default')
// }