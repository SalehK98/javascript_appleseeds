const book = {
  name: "novel",
  author: "writer",
  publishYear: 0000,
};

const book_1 = {
  name: "novel11",
  author: "writer11",
  publishYear: 1111,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    return book1.publishYear > book2.publishYear
      ? console.log(book1)
      : console.log(book2);
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    book.translation = { translator: translator, language: language };
  },
  setPublisher(book, name, location) {
    book.publisher = { name: name, location: location };
  },
  isSamePublisher(book1, book2) {
    return book1.publisher.name === book2.publisher.name &&
      book1.publisher.location === book2.publisher.location
      ? "same publisher"
      : "not same publisher";
  },
};

bookUtils.getFirstPublished(book, book_1);
