import express from "express";
import BookController from "../controllers/AuthorContoller.js";

const routes = express.Router();

routes.get("/authors", BookController.getAllAuthors);
routes.get("/authors/:id", BookController.getById);
routes.post("/authors", BookController.createAuthor);
routes.put("/authors/:id", BookController.updateAuthor);
routes.delete("/authors/:id", BookController.deleteAuthor);

export default routes;