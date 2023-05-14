import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ideaSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    }
});

const Idea = mongoose.model('idea',ideaSchema);

export default Idea;