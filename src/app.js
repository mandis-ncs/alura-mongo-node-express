import express from "express"
import connectToDatabase from "./config/dbConnect.js";
import book from "./models/Book.js"

const connect = await connectToDatabase();
connect.on("error", (error) => {
    console.error("error connecting on database", error);
});

connect.once("open", () => {
    console.log("Succesfully connected to database");
});

const app = express();
app.use(express.json()); //middleware to parse from string to json

app.get("/", (req, res) => {
    res.status(200).send("Node Js");
});

app.get("/books", async (req, res) => {
    const list = await book.find({});
    res.status(200).json(list);
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