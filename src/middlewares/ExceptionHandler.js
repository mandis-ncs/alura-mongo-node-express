import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function exceptionHandler(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "One or more data fields are incorrects" });
    } else {
        res.status(500).json({ message: "Internal server error" });
    }
}

export default exceptionHandler;