const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

const canRead = arr => {
    arr.filter(el => {
        if (el.readingStatus) console.log(el.title + " by " + el.author);
    })
}

canRead(library)