// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ('hello world', 'lorem ipsum', 'javascript is cool');
// console.log(str.length);
// -------------------------------------------------------------------------------
//

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ('hello world', 'lorem ipsum', 'javascript is cool');
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
// ------------------------------------------------------------------------------------

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = ('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
// ------------------------------------------------------------------------------------


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim);
// ------------------------------------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать'
// let split = str.split(' ');
// console.log(split);
// ------------------------------------------------------------------------------------

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый

//     let str = 'Каждый охотник желает знать';
// document.write(str.substr(0, 6));
// ------------------------------------------------------------------------------------

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// document.write(str.toUpperCase().replaceAll(' ', '-'))
// ------------------------------------------------------------------------------------

// - Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'what do you want?';
// let toUpperCase = str => str.charAt(0).toUpperCase() + str.substr(1, 17);
// console.log(toUpperCase(str));
// ------------------------------------------------------------------------------------

// - Напишіть функцію capitalize(str), яка повертає рядок,
// у якому кожне слово починається з великої літери.
// let str = 'what do you want?';
// let capitalize = str => str.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
// console.log(capitalize(str))