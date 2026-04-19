const { generateIdea, getHomeIdeas, getSpecificIdea, getAllIdeasByCategory } = require("../utils/ideaGenerator");
const { getIdeaImage } = require("../utils/unsplashService");

exports.getIdea = async (req, res) => {
    const { category } = req.params;
    const { title } = req.query;

    let idea;
    if (title) {
        idea = getSpecificIdea(category, title);
    } else {
        idea = generateIdea(category);
    }

    if (!idea) {
        return res.status(404).json({ message: "Idea not found" });
    }

    const imageUrl = await getIdeaImage(idea.title, category);

    res.json({
        ...idea,
        realityScore: Math.floor(Math.random() * 100),
        image: imageUrl
    });
};

exports.getHomeIdeas = (req, res) => {
    res.json(getHomeIdeas());
};

exports.getCategoryAll = (req, res) => {
    const { category } = req.params;
    const allIdeas = getAllIdeasByCategory(category);
    res.json(allIdeas);
};