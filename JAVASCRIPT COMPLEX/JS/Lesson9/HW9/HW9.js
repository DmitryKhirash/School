// // Все робити за допомоги js.
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
//
// let div1 = document.createElement('div');
// let classCollection = document.getElementsByClassName('wrap' + 'collapse' + 'alpha' + 'beta');
// console.log(div1);
// console.log(classCollection);
// div1.innerHTML = '<h1>Hello I`m fine.</h1>'
// div1.style.background = 'silver';
// div1.style.color = 'gold';
// document.body.appendChild(div1)
// document.body.appendChild(div1.cloneNode(true));

// //
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює
// // li та додає його до блоку .menu
// // Завдання робити через цикли.
// //
// // let arr = ['Main', 'Products', 'About us', 'Contacts'];
// // let menu = document.getElementsByClassName('menu')[0];
// // for (const string of arr) {
// //     let li = document.createElement('li');
// //     li.innerText = string;
// //     menu.appendChild(li);
// // }
// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// //
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement("div");
//     div.innerText = `${coursesAndDurationArrayElement.title} ${coursesAndDurationArrayElement.monthDuration}`;
//     document.body.appendChild(div);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     divElement.style.display = 'flex'
//     let h1Element = document.createElement('h1');
//     h1Element.classList.add('heading');
//     h1Element.innerText = `${course.title}`;
//     let pElement = document.createElement('p');
//     pElement.classList.add('description');
//     pElement.innerText = `${course.monthDuration}`;
//
//
//     divElement.append(h1Element, pElement);
//     document.body.appendChild(divElement);
// }