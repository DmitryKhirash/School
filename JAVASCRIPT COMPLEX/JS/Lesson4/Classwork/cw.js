// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function numMin(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1)
//     }else if (num2 < num3 && num2 < num1) {
//         document.write(num2);
//     }else{
//         document.write(num3)
//     }
// }
// numMin(24, 346, 3465);
// -----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numMax(num1, num2, num3){
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//     }else if (num2 > num1 && num2 > num3) {
//         document.write(num2);
//     } else {
//         document.write(num3)
//     }
// }
// numMax(100,50,90)
// ------------------------------------------------------------------------------------------------------------------------

// - створити функцію яка повертає найбільше число з масиву

// let arr = [20, 356, 73, 346];
// function numMaxArr (arr){
//         return Math.max.apply(null, arr);
// }
// console.log(numMaxArr(arr))
// ----------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву

// let arr = [25, 356, 73, 346];
// function numMinArr (arr){
//         return Math.min.apply(null, arr);
// }
// console.log(numMinArr(arr))
// ---------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [25, 356, 73];
// function calc(arr){
//     return arr.reduce ((accumulator, currentValue) => accumulator + currentValue)
// }
// document.write(calc(arr))

// let arr1 = [25, 356, 73];
// function calc(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum=sum+arrElement;
//     }
//     return sum
// }
// console.log(calc(arr1))
// let arrNum1 = [1,2,3,4,5,6,7,8,9];
// let arrNum2 =[11,22,33,44,55,66,77];
// let arrNum3 = [111,222,333,444,555,666];
//
// function sumArr(arr) {
//     let a = 0;
//     for (const argument of arr) {
//         a = a + argument;
//     }
//     return a;
// }
//
// console.log(sumArr(arrNum1))
// console.log(sumArr(arrNum2))
// console.log(sumArr(arrNum3))
//
// let arrNum4 = [2,3,4];
// console.log(sumArr(arrNum4))
// ----------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrNum1= [4, 5, 6, 7];
// function numMid(arr){
//     let a = 0;
//     for (const arrElement of arr) {
//         a=(a+arrElement)
//     }
//     return a/arr.length
// }
//
// console.log(numMid(arrNum1));
// ----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max", max);
//     return min
// }
// document.write("Ми побачимо найменше число:" +minMax(22,3487,100500) )
// ----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomNum(length) {
//     let arrEmpty = [];
//     for (let i = 0; i < length; i++) {
//         arrEmpty.push(Math.floor(Math.random() * 100));
//     }
//     return arrEmpty
// }
//
// document.write(randomNum(5));
// ----------------------------------------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomNum(length,limit) {
//     let arrEmpty = [];
//     for (let i = 0; i < length; i++) {
//         arrEmpty.push(Math.floor(Math.random() * limit));
//     }
//     return arrEmpty
// }
//
// document.write(randomNum(5,50));
// ----------------------------------------------------------------------------------------------------------------------

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//     function funReverseArr(arr) {
//         let revarr = [];
//         for (let i = 0, ri = arr.length -1; i < arr.length; i++,ri--) {
//             revarr[ri] = arr[i];
//         }
//         return revarr;
//     }
//
// console.log(funReverseArr([1, 2, 3]));


