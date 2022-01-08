// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text"
// let btn1 = document.getElementById('btn1');
// btn1.onclick = function () {
//     document.getElementById('text').style.display = 'none';
// };

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn1 = document.getElementById('btn1');
// btn1.onclick = function () {
//     document.getElementById('btn1').style.display = 'none';
// };
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача.
//
// let formAge = document.forms.enterAge;
// formAge.onsubmit = function (age) {
//     age.preventDefault();
//     if (+this.userAge.value < 18) {
//     alert('No this time')
//     }
// };
// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function () {
//     this.classList.toggle('collapse')
// };

// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function () {
//     console.log(this.children);
//     for (const child of this.children) {
//         child.classList.toggle('hide')
//
//     }
// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
// ];
// for (const comment of comments) {
//     let commentDiv = document.createElement('div');
//     commentDiv.classList.add('comment');
//     let title = document.createElement('h2');
//     title.innerText = comment.title;
//     let bodyComment = document.createElement('div');
//     bodyComment.classList.add('body-comment');
//     bodyComment.innerText = comment.body
//     let btn = document.createElement('button');
//     btn.innerText = 'Hide this comment';
//     btn.onclick = function () {
//         bodyComment.classList.toggle('hide-body');
//     };
//
//     commentDiv.append(title, bodyComment, btn);
//     document.body.appendChild(commentDiv)
// }
