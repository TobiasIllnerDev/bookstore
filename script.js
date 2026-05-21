function renderNotes() {
    let contentRef = document.getElementById('imput-section');
    contentRef.innerHTML = '';
    for (let index = 0; index < books.length; index++) {
        contentRef.innerHTML += getBookTemplate(index);
    }
}