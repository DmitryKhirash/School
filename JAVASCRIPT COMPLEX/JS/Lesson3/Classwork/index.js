// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < nums.length) {
//     console.log(nums[i])
//     i++;
// }
//     2. перебрати його циклом for
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nums.length ; i++) {
//     console.log(nums[i]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//  i = 0;
// while (i < nums.length) {
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//     }
//         i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nums.length ; i++) {
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//  i = 0;
// while (i < nums.length) {
//     if (nums[i] % 2 === 0) {
//         console.log(nums[i]);
//     }
//         i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nums.length ; i++) {
//     if (nums[i] % 2 === 0) {
//         console.log(nums[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nums.length ; i++) {
//     if (nums[i] % 3 === 0) {
//         console.log(nums[i]='Okten');
//     }
// }
// console.log(nums)
// 8. вивести масив в зворотньому порядку.
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nums.length; i > -1; i--) {
//     if (nums[i] % 3 === 0) {
//         console.log(nums[i]='Okten');
//     }
// }
// console.log(nums)
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1.reverse
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = nums.length;
// while (i > -1) {
//     console.log(nums[i])
//     i--;
// }

// 2.reverse
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nums.length; i > -1; i--) {
//     console.log(nums[i]);
// }

// 3.reverse
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//  i = nums.length;
// while (i > -1) {
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//     }
//         i--;
// }

// 4.reverse
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nums.length; i > -1  ; i--) {
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//     }
// }

// 5.reverse
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//  i = nums.length;
// while (i > -1) {
//     if (nums[i] % 2 === 0) {
//         console.log(nums[i]);
//     }
//         i--;
// }

// 6.reverse
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nums.length; i > -1 ; i--) {
//     if (nums[i] % 2 === 0) {
//         console.log(nums[i]);
//     }
// }

// 7.reverse
// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i =nums.length; i > -1 ; i--) {
//     if (nums[i] % 3 === 0) {
//         console.log(nums[i]='Okten');
//     }
// }
// console.log(nums)