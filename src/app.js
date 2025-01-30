import express from "express"
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectToDatabase();
connect.on("error", (error) => {
    console.error("error connecting on database", error);
});

connect.once("open", () => {
    console.log("Succesfully connected to database");
});

const app = express();
routes(app);

export default app;