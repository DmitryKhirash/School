// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('main-div');

        for (const user of response) {
            let wrapUserDiv = document.createElement('div');
            wrapUserDiv.classList.add('wrap-user-div');

            const userDiv = document.createElement('div')
            userDiv.classList.add('user-div');
            userDiv.innerHTML = `
                <h2>${user.id} - ${user.name} </h2>`


            const btnDetails = document.createElement('button');
            btnDetails.classList.add('btn-details');
            btnDetails.innerText = 'User Details'
            btnDetails.id = 'user-btn'

            btnDetails.onclick = function () {
                localStorage.setItem('details', JSON.stringify(user))
                window.location.href = 'user_details.html?id=' + id;
            };






            wrapUserDiv.append(userDiv, btnDetails)
            mainDiv.appendChild(wrapUserDiv)
            document.body.appendChild(mainDiv)
        }
    });

