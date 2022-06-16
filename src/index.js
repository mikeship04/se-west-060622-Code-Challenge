// 1. see the image received from the server, its title, and likes, comments.
//make a get request to the following endpoint //localhost:3000/images/1

//2. click on the heart icon to increase image likes (no persist)
//3. add a new comment to the page on submit.

// data contains comments, likes, image, id, title

const mainPost = document.querySelector('.image-card')
const likeButton = document.getElementById('like-button')
const span = document.createElement('span')
const commentForm = document.getElementById('comment-form')


fetch('http://localhost:3000/images/1')
.then(result => result.json())
.then(data => renderPost(data))

function renderPost(obj) {
    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    const li = document.createElement('li')

    li.textContent = obj.comments.content
    span.textContent = `${obj.likes} likes`
    h2.innerHTML = obj.title
    img.src = obj.image
    img.className = 'image-card'
  
    mainPost.append(h2,img,span,li)
}

likeButton.addEventListener('click', (e) =>{
    console.log('i was clicked')
})

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newComment = e.target.comment.value
    commentForm.reset()
    mainPost.append(newComment)
})