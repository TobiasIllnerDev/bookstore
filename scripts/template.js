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
              <img src="../assets/icons/heart.png" alt="Heart" class="img-class"/>
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

        <div class="book-feedback" id="book-feedback-section"></div>
      </section>`
}