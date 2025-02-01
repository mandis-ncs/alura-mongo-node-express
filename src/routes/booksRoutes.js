import express from "express";
import BookController from "../controllers/BookContoller.js";

const routes = express.Router();

routes.get("/books", BookController.getAllBooks);
routes.get("/books/search", BookController.getBooksByTtile);
routes.get("/books/:id", BookController.getById);
routes.post("/books", BookController.createBook);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBook);

export default routes;