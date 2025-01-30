import express from "express"

const app = express();
app.use(express.json()); //middleware to parse from string to json

const books = [
    {
        id: 1,
        title: "A"
    },
    {
        id: 1,
        title: "B"
    },
]

function searchBook(id) {
    return books.findIndex(book => {
        return book.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Node Js");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).json("Created");
});

app.put("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    books.push(req.body);
    res.status(200).json(books[index]);
});

app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(204).json("Deleted");
});

export default app;