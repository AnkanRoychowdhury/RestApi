import Idea from "../models/idea.model.js";

/* Search all Ideas */

export const fetchAllIdeas = async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.status(200).json(ideas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* Get Idea By Id */

export const getIdeaById = async (req, res) => {
    try {
        const id = req.params.id;
        const idea = await Idea.findOne({ id: id });
        res.status(200).json(idea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* Create New Idea */

export const createIdea = async (req, res) => {
    try {
        // Find the last idea in the database
        const lastIdea = await Idea.findOne().sort({ id: -1 });

        // Increment the ID of the new idea
        const newId = lastIdea ? lastIdea.id + 1 : 1;

        // Create the new idea with the incremented ID
        const newIdea = await Idea.create({ id: newId, ...req.body });

        res.status(201).json(newIdea);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

/* Update Idea */

export const updateIdea = async (req, res) => {
    const { id } = req.params;
    const { name, author, description } = req.body;

    try {
        const idea = await Idea.findOneAndUpdate(
            { id },
            { name, author, description },
            { new: true }
        );

        if (!idea) {
            return res.status(404).json({ message: "Idea not found" });
        }

        res.status(200).json(idea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/* Delete Idea */

export const deleteIdea = async (req, res) => {
    try {
        // Find the last idea in the database
        const idea = await Idea.findOne().sort({ id: -1 });

        if (!idea) {
            return res.status(404).json({ message: "No ideas found" });
        }

        // Delete the last idea
        const deletedIdea = await Idea.findOneAndDelete({ id: idea.id });

        res.status(200).json({ message: "Idea deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteIdeaById = async (req, res) => {
    try {
        // Find the last idea in the database
        const id = req.params.id;
        const idea = await Idea.findOne({id: id});

        if (!idea) {
            return res.status(404).json({ message: "No ideas found" });
        }

        // Delete the last idea
        const deletedIdea = await Idea.findOneAndDelete({ id: id });

        res.status(200).json({ message: "Idea deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
