const axios = require('axios');

// Simple in-memory cache to prevent redundant API calls
const imageCache = new Map();

exports.getIdeaImage = async (ideaTitle, category) => {
    try {
        const query = `${ideaTitle} ${category} app minimal technology`.trim();
        
        if (imageCache.has(query)) {
            return imageCache.get(query);
        }

        const accessKey = process.env.UNSPLASH_ACCESS_KEY;
        if (!accessKey || accessKey === 'your_key_here') {
            console.warn("Unsplash API Key is missing or invalid. Returning fallback image.");
            return "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=800&q=80"; // Fallback
        }

        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query: query,
                per_page: 1,
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        });

        if (response.data.results && response.data.results.length > 0) {
            const imageUrl = response.data.results[0].urls.regular;
            imageCache.set(query, imageUrl);
            return imageUrl;
        }

        // Default local fallback if no result found
        return "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=800&q=80";
    } catch (error) {
        console.error("Unsplash API error:", error.message);
        return "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=800&q=80";
    }
};
