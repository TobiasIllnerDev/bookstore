function getBookTemplate(index){
    return `
    <section class="book-section">
        <div class="book-header">
          <p>${books[index].name}</p>
        </div>

        <div class="book-img">
          <img src="./assets/imgs/book.png" alt="Book" />
        </div>

        <div class="book-body">
          <div class="book-body-content">
            <div>
              <p class="red-money-text">${books[index].price} €</p>
            </div>
            <div class="liked-section">
              <p>${books[index].likes}</p>
              <img src="./assets/icons/heart.png" 
              alt="Heart" 
              tabindex="0"
              class="img-class ${books[index].liked ? 'red-heart' : 'blank-heart'}"
              onclick="bookToFavorite(${index})"
              id="book-favorite-${index}"/>
            </div>
          </div>
          <div class="book-body-content-bottom">
            <div class="p-element">
              <p>Author</p>
              <p>Erscheinungsdatum</p>
              <p>Genre</p>
            </div>
            <div class="p-element">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div class="p-element">
              <p>${books[index].author}</p>
              <p>${books[index].publishedYear}</p>
              <p>${books[index].genre}</p>
            </div>
          </div>
        </div>
        <div class="book-feedback" id="book-feedback-section-${index}"></div>
      </section>`
}

function getCommentTemplate(bookIndex, commentIndex) {
    return `
        <div class="comment-text">
            <div><p><strong>${books[bookIndex].comments[commentIndex].name}</strong></p></div>
            <div><p>${books[bookIndex].comments[commentIndex].comment}</p></div>
        </div>
    `;
}

function getNewCommentTemplate(bookIndex) {
    return `
        <div class="new-comment">
            <input 
                type="text" 
                id="new-comment-${bookIndex}"
                placeholder="Schreibe einen Kommentar..."
            />
            <img 
                src="./assets/icons/paperplane.png" 
                alt="Senden" 
                tabindex="0"
                class="img-class"
                onclick="addComment(${bookIndex})"
            />
        </div>
    `;
}