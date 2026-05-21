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
              <p class="red-money-text">19,99</p>
            </div>
            <div>
              <p>1250</p>
              <img src="" alt="" />
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
              <p>Clara Meer</p>
              <p>Clara Meer</p>
              <p>Clara Meer</p>
            </div>
          </div>
        </div>

        <div class="book-feedback" id="book-feedback-section"></div>
      </section>`
}