const book = {
  name: "novel",
  author: "writer",
  publishYear: 0000,
  rating: 4.5,
  availability: true,
};

const bookInfo = (obj) =>
  console.log(`The book ${obj.name} was written by ${obj.author} in
the year ${obj.publishYear}`);

bookInfo(book);
