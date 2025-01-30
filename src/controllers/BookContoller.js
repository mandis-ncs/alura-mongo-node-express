import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {

    static async getAllBooks (req, res) {
        try {
            const list = await book.find({});
            res.status(200).json(list);   
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed getting all books` });
        }
    };
    
    static async getById (req, res) {
        try {
            const id = req.params.id;
            const found = await book.findById(id);
            res.status(200).json(found);   
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed getting book by id` });
        }
    };

    static async createBook (req, res) {

        const newBook = req.body;

        try {
            const authorFound = await author.findById(newBook.author);
            const completeBook = { ...newBook, author: { ...authorFound._doc }};
            const createdBook = await book.create(completeBook);
            res.status(201).json({ message: "Created", book : createdBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed creating a new book` });
        }
    };

    static async updateBook (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Book updated" });   
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed updating book by id` });
        }
    };

    static async deleteBook (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(204).json({ message: "Book deleted" });    
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed deleting book by id` });
        }
    };

};

export default BookController;