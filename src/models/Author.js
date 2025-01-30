import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    country: { type: String }
}, { versionKey: false });

const author = mongoose.model("authors", authorSchema);

export { author, authorSchema };