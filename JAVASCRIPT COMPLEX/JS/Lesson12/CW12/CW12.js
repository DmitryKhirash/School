// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі
// на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок
//     всі коментарі поточного поста

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts => {
        console.log(posts)
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const post of posts) {
            let divCard = document.createElement('div');
            divCard.classList.add('divCard');
            divCard.innerHTML = `
                 <h2>User ID: ${post.id}</h2>
                 <h3>Title: ${post.title}</h3>
                 <h4>Body: ${post.body}</h4>
                `;
            let button = document.createElement('button');
            button.innerText = 'Comments';
            button.classList.add('btn')
            button.onclick = (e) =>{
                console.log(e);
                button.disabled = true;
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments =>{
                        button.disabled = false;
                        for (const comment of comments) {

                            if (post.id === comment.postId) {
                                let divCardComments = document.createElement('div');
                                divCardComments.classList.add('cardComments');
                                divCardComments.innerHTML = `
                                    <h3>ID: ${comment.id}</h3>
                                    <h4>Name: ${comment.name}</h4>
                                    <h5>Email: ${comment.email}</h5>
                                    <h5>Body: ${comment.body}</h5>
                                    `;
                                divCard.appendChild(divCardComments);
                            }
                        }
                    })
            }
            divCard.appendChild(button);
            wrap.appendChild(divCard);
            document.body.appendChild(wrap)
        }
    });