//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
// let i = 0;
// while (i < arrayNumbers.length) {
//     console.log(arrayNumbers[i]);
//     i++;
// }
//     2. перебрати його циклом for
// for (const arrayNumber of arrayNumbers) {
//     console.log(arrayNumber)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arrayNumbers.length) {
//     if (i % 2 !== 0) {
//         console.log(arrayNumbers[i]);
//     }
//     i++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (i = 0; i < arrayNumbers.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arrayNumbers[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arrayNumbers.length) {
//     let item = arrayNumbers[i];
//     if (item % 2 === 0) {
//         console.log(item);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (const arrayNumber of arrayNumbers) {
//     if (arrayNumber % 2 === 0) {
//         console.log(arrayNumber)
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arrayNumbers.length; i++) {
//     if (arrayNumbers[i] % 3 === 0) {
//         arrayNumbers[i] = 'okten';
//         console.log(arrayNumbers[i]);
//     }
// }
// console.log(arrayNumbers)
// 8. вивести масив в зворотньому порядку.

// for (let i = arrayNumbers.length - 1; i >= 0; i--) {
//     let arrayNumber = arrayNumbers[i];
//     console.log(arrayNumber)
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//Завдання: 1)
// let i = 0;
// while (i < arrayNumbers.length) {
//     console.log(arrayNumbers[i]);
//     i--;
// }

//====================================================================================================//
//Завдання: 2)
// for (let i = arrayNumbers.length - 1; i >= 0; i--) {
//     const arrayNumber = arrayNumbers[i];
//     console.log(arrayNumber)
// }
//====================================================================================================//
//Завдання: 3)
// debugger
// let i = arrayNumbers.length;
// while (i > -1) {
//     if (i % 2 !== 0) {
//         console.log(arrayNumbers[i]);
//     }
//     i--;
// }
//====================================================================================================//
//Завдання: 4)
// for (let i = arrayNumbers.length - 1; i > 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(arrayNumbers[i]);
//     }
// }
//====================================================================================================//
//Завдання: 5)
// let i = arrayNumbers.length;
// while (i > -1) {
//     if (arrayNumbers[i] % 2 === 0) {
//         console.log(arrayNumbers[i])
//     }
//     i--;
// }

//====================================================================================================//
//Завдання: 6)

// for (let i = arrayNumbers.length; i >= 0; i--) {
//     let item = arrayNumbers[i];
//     if (item % 2 === 0) {
//         console.log(item)
//     }
// }
//====================================================================================================//
//Завдання: 7)
// for (let i = arrayNumbers.length; i >= -1; i--) {
//     let item = arrayNumbers[i];
//     if (item % 3 === 0) {
//         console.log(item = 'okten');
//     }
//     console.log(arrayNumbers[i])
// }
