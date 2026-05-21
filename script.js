function renderNotes() {
    let contentRef = document.getElementById('imput-section');
    contentRef.innerHTML = '';
    for (let index = 0; index < books.length; index++) {
        contentRef.innerHTML += getBookTemplate(index);
        renderComments(index);
    }
}

function renderComments(bookIndex) {
    let commentRef = document.getElementById(`book-feedback-section-${bookIndex}`);
    commentRef.innerHTML = '';

    for (let i = 0; i < books[bookIndex].comments.length; i++) {
        commentRef.innerHTML += getCommentTemplate(bookIndex, i);
    }

     commentRef.innerHTML += getNewCommentTemplate(bookIndex);
}

