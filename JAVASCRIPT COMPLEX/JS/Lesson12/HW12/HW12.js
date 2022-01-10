// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts => {
        // console.log(posts)
        let divPost = document.createElement('div');
        divPost.classList.add('divPost');
        for (const post of posts) {
            let divCard = document.createElement('div');
            divCard.classList.add('divCard')
            divCard.innerHTML = `
                    <h3>Post number: ${post.id}</h3>
                    <h4>Title: ${post.title}</h4>
                    <h5>Body: ${post.body}</h5>
                    `;

            divPost.appendChild(divCard);
            document.body.appendChild(divPost);
        }

    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(comments => {
        console.log(comments)
        let wrap = document.createElement('div');
        wrap.classList.add('wrap')
        for (const comment of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('divComments');
            divComment.innerHTML = `
                        <h2>Number post: ${comment.postId}</h2>
                        <h2>Name: ${comment.name}</h2>
                        <h3>Email: ${comment.email}</h3>
                        <h4>Body: ${comment.body}</h4>
            `

            wrap.appendChild(divComment)
            document.body.appendChild(wrap)

        }
    });

