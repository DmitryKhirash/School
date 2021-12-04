// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3){
//     document.write('This is a big array, in which 3 or more elements.')
// }else {
//     document.write('This is a small array,in which 3 or less elements.')
// }
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//

// let firstNum = +prompt('Enter first random number');
// let secondNum = +prompt('Enter second random number');
// let thirdNum = +prompt('Enter third random number');
// if ((firstNum < secondNum && firstNum > thirdNum) || (firstNum > secondNum && firstNum < thirdNum)) {
//     console.log(firstNum);
// } else if ((secondNum > firstNum && secondNum < thirdNum) || (secondNum < firstNum && secondNum > thirdNum)) {
//     console.log(secondNum);
// } else if ((thirdNum > firstNum && thirdNum < secondNum) || (thirdNum < firstNum && thirdNum > secondNum)) {
//     console.log(thirdNum);
// }


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

//
// let a = 1;
// let b = 3;
// let result = (a+b<4)? 'True': 'False'
// console.log(result);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let enter = +(prompt('Введіть будь яке число від -100 до +100'));
// let result = (enter < 0 ? "Negative" : (enter === 0) ? "Null" : (enter > 0) ? "Positive":'Not this number');
// console.log(result);