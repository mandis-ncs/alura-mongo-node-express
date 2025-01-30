import { author } from "../models/Author.js";

class AuthorController {

    static async getAllAuthors (req, res) {
        try {
            const list = await author.find({});
            res.status(200).json(list);   
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed getting all authors` });
        }
    };
    
    static async getById (req, res) {
        try {
            const id = req.params.id;
            const found = await author.findById(id);
            res.status(200).json(found);   
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed getting author by id` });
        }
    };

    static async createAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Created", author : newAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed creating a new author` });
        }
    };

    static async updateAuthor (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author updated" });   
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed updating author by id` });
        }
    };

    static async deleteAuthor (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(204).json({ message: "Author deleted" });    
        } catch (error) {
            res.status(500).json({ message: `${error.message}} - Failed deleting author by id` });
        }
    };

};

export default AuthorController;