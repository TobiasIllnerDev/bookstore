function init() {
    getFromLocalStorage();
    renderNotes();
}

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


function addComment(bookIndex) {
    let inputRef = document.getElementById(`new-comment-${bookIndex}`);

    if (inputRef.value != "") {
        books[bookIndex].comments.push({
            name: "Tobias",
            comment: inputRef.value
        });
    }

    saveToLocalStorage();

    renderNotes();
    inputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books))
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("books"));

    if (myArr) {
        books = myArr;
    }
}

function bookToFavorite(index) {
    let heartRef = document.getElementById(`book-favorite-${index}`);

    if (books[index].liked == false) {
        books[index].likes += 1;
        books[index].liked = true;

        heartRef.classList.remove("blank-heart");
        heartRef.classList.add("red-heart");

    } else {
        books[index].likes -= 1;
        books[index].liked = false;

        heartRef.classList.remove("red-heart");
        heartRef.classList.add("blank-heart");
    }

    saveToLocalStorage();
    renderNotes();
}