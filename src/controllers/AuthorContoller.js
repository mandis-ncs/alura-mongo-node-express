import { author } from "../models/Author.js";

class AuthorController {

    static async getAllAuthors (req, res, next) {
        try {
            const list = await author.find({});
            res.status(200).json(list);   
        } catch (error) {
            next(error);
        }
    };
    
    static async getById (req, res, next) {
        try {
            const id = req.params.id;
            const found = await author.findById(id);

            if (found !== null) {
                res.status(200).json(found);   
            } else {
                res.status(404).json({ message: "Failed getting author by id" });    
            }

        } catch (error) {
            next(error);
        }
    };

    static async createAuthor (req, res, next) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Created", author : newAuthor });
        } catch (error) {
            next(error);
        }
    };

    static async updateAuthor (req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author updated" });   
        } catch (error) {
            next(error);
        }
    };

    static async deleteAuthor (req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(204).json({ message: "Author deleted" });    
        } catch (error) {
            next(error);
        }
    };

};

export default AuthorController;