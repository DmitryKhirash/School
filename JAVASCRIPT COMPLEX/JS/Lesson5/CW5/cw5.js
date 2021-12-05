// Всі функції повинні бути описані стрілочним типом!!!!
// ---------------------------------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNum = (num1,num2,num3)=>{
//     if (num1<num2 && num1<num3){
//         console.log(num1)
//     }else if (num2<num1 && num2<num3){
//        console.log(num2)
//     }else {
//         console.log(num3)
//     }
// }
//     minNum(10, 11, 6);
// ---------------------------------------------------------------------------------------

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (n1,n2,n3) =>{
//     if (n1 > n2 && n1 > n3) {
//         console.log(n1);
//     }else if (n2 > n1 && n2 > n3) {
//         console.log(n2);
//     } else {
//         console.log(n3);
//     }
// }
// maxNum(15,22,32)
// ---------------------------------------------------------------------------------------

// - створити функцію яка повертає найбільше число з масиву
// let xxx = [2,10,42]
// let maxNumArr = (arr) => Math.max.apply(null,arr);
// console.log(maxNumArr(xxx));
// ---------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву

// let minNumArr = (arr) => Math.min.apply(null, arr);
// console.log(minNumArr([3,4,6]))
// ---------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let sumArr = (arr) => arr.reduce((acamulator,currentValue)=>acamulator+currentValue);

// let sumArr = (arr) =>{
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum
// }
// console.log(sumArr([1, 2, 4]));
// ---------------------------------------------------------------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let midArr = (arr) =>{
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum/arr.length
// }
// console.log(midArr([1,2,7,6,17]))
// ---------------------------------------------------------------------------------------

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// const minMax = (...arguments)=> {
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
// ---------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// const randomArr = (lenght)=>{
//     let arrEmpty = [];
//     for (let i = 0; i < lenght; i++) {
//         arrEmpty.push(Math.floor(Math.random() * 100));
//     }
//        return arrEmpty
// }
// document.write(randomArr(7));
// ---------------------------------------------------------------------------------------

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// const ranArr = (length, limit) =>{
//     let arrEmpty = [];
//     for (let i = 0; i < length; i++) {
//         arrEmpty.push(Math.floor(Math.random() * limit));
//     }
//     return arrEmpty
// }
// console.log(ranArr(3,90))
// ---------------------------------------------------------------------------------------

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const reverseArr = (arr) =>{
//     let revArr = [];
//     for (let i=0, ri = arr.length - 1; i <arr.length; i++,ri--) {
//         revArr[ri] = arr[i];
//     }
//     return revArr;
// }
// console.log(reverseArr([30, 20, 10]));