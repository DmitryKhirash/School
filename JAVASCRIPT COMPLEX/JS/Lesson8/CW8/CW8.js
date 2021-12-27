// // // Взяти файл template_2.html та працювати в ньому
// // // 1) Напишіть код, який :
// // // a) додає клас з назвою групи, елементу з ід main_header
// // let newClass = document.getElementById('main_header');
// // newClass.classList.add('newClass');
// //
// // // b) робить шириниу елементу ul 400px
// // let widthUl = document.getElementsByTagName('ul');
// // widthUl[0].style.width = '400px';
// // widthUl[0].style.color = 'green'
// //
// // // c) робить шириниу всіх елементів з класом linkList шириною 50%
// //
// // let widthClassLinkList = document.getElementsByClassName('linkList');
// // for (const widthClassLinkListElement of widthClassLinkList) {
// //     widthClassLinkListElement.style.width = '50%';
// // }
// // // d) отримує текст який зберігається в елементі з класом listElement2
// // let pText = document.getElementsByClassName('listElement2');
// // console.log(pText);
// // pText[0].innerHTML = '<a href=""><b>NEW TEXT</b></a>'
// //
// // // e) отримує всі елементи li та змінює ім колір фону на сірий
// // let changeColor = document.getElementsByTagName('li');
// // for (const changeColorElement of changeColor) {
// //     changeColorElement.style.background = 'silver';
// // }
// // // f) отримує всі елементи 'a' та додає їм клас anchor
// // let newClass2 = document.getElementsByTagName('a');
// // console.log(newClass2)
// // for (const newClass2Element of newClass2) {
// //     newClass2Element.classList.add('newClass2');
// // }
// // // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// // // змінює йому розмір тексту на 40 пікселів
// // for (const newClass2Element of newClass2) {
// //     if (newClass2Element.innerText === 'link3') {
// //         newClass2Element.style.fontSize = '40px';
// //     }
// // }
// // // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// // let aAll = document.getElementsByTagName('a');
// // console.log(aAll);
// // for (let aAllElement of aAll) {
// //     console.log(aAllElement);
// //     let newClass = aAllElement.innerText = 'XXX';
// //     aAllElement.classList.add(`element_${newClass}`)
// // }
// // // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// // let allSubHeader = document.getElementsByClassName('sub-header');
// // console.log(allSubHeader);
// // for (const allSubHeaderElement of allSubHeader) {
// //     allSubHeaderElement.style.color = prompt('Enter color:(red, green, blue)');
// // }
// //
// // // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
// // // якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// // let allSubHeader2 = document.getElementsByClassName('sub-header');
// // console.log(allSubHeader2);
// // for (const allSubHeaderElement of allSubHeader) {
// //     if (allSubHeaderElement.innerText === 'content 2 segment')  {
// //         allSubHeaderElement.style.color = prompt('Enter color: (green, gold...');
// //     }
// // }
// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let changeText = document.getElementsByClassName('content_1');
// console.log(changeText);
// for (const changeTextElement of changeText) {
//     changeTextElement.innerText = prompt('Enter change text:...')
// }
//
// // l) отримати елементи p та змінити їм padding на 20px
// let paddingP = document.getElementsByTagName('p');
// console.log(paddingP);
// for (const paddingPElement of paddingP) {
//     paddingPElement.style.padding = '20px';
//     paddingPElement.style.border = '1px solid blue';
// }
// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let changeClass = document.getElementsByClassName('text2');
// for (const changeClass1 of changeClass) {
//     changeClass1.innerText = 'sep-2021'
// }
//
