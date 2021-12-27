// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger';
// let valid = (name) => name.replaceAll('..', ' ')
//     .replaceAll('---', ' ')
//     .replaceAll('__', ' ');
// console.log(valid(n3))
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function arrRandom(size){
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }

// console.log(arrRandom(10))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// let arrayR = arrRandom(20);
// arrayR.sort((a, b) => a - b);
// arrayR.sort((a, b) => b -a );
// console.log(arrayR)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа.
// let arrayF = arrRandom(20);
// arrayF.filter(value => !(value % 2));
// console.log(arrayF)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arrRandom = (length, num) =>{
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.map(value => value + '');
// }
// console.log(arrRandom(20,10))

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11,21,3];

// function sortNums(arr,direction) {
//     if (direction === 'ascending') {
//         return arr.sort((a,b) => a - b )
//     }else if (direction === 'descending') {
//         return arr.sort((a, b) => b - a);
//     }
//     return [];
// }
//
// console.log(sortNums([13,5,6,7],'descending'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));;