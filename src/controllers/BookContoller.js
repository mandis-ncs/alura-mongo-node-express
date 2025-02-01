import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {

    static async getAllBooks (req, res, next) {
        try {
            const list = await book.find({});
            res.status(200).json(list);   
        } catch (error) {
            next(error);
        }
    };
    
    static async getById (req, res, next) {
        try {
            const id = req.params.id;
            const found = await book.findById(id);
            res.status(200).json(found);   
        } catch (error) {
            next(error);
        }
    };

    static async createBook (req, res, next) {

        const newBook = req.body;

        try {
            const authorFound = await author.findById(newBook.author);
            const completeBook = { ...newBook, author: { ...authorFound._doc }};
            const createdBook = await book.create(completeBook);
            res.status(201).json({ message: "Created", book : createdBook });
        } catch (error) {
            next(error);
        }
    };

    static async updateBook (req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Book updated" });   
        } catch (error) {
            next(error);
        }
    };

    static async deleteBook (req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(204).json({ message: "Book deleted" });    
        } catch (error) {
            next(error);
        }
    };

    static async getBooksByTtile (req, res, next) {
        const title = req.query.title;
 
        try {
            const bookByTitle = await book.find({ title: title });
            res.status(200).json(bookByTitle);   
        } catch (error) {
            next(error);
        }
    };

};

export default BookController;