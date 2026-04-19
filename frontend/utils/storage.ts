import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@saved_ideas';

export interface SavedIdea {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    tech: string;
    image: string;
    savedAt: number;
}

// Get all saved ideas
export const getSavedIdeas = async (): Promise<SavedIdea[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error("Failed to fetch ideas", e);
        return [];
    }
}

// Save a new idea
export const saveIdea = async (idea: SavedIdea): Promise<boolean> => {
    try {
        const savedIdeas = await getSavedIdeas();
        // Prevent duplicates
        if (savedIdeas.some(i => i.title === idea.title)) {
            return false;
        }

        const newIdea = { ...idea, savedAt: Date.now() };
        savedIdeas.push(newIdea);
        
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(savedIdeas));
        return true;
    } catch (e) {
        console.error("Failed to save idea", e);
        return false;
    }
}

// Remove an idea
export const removeIdea = async (title: string): Promise<boolean> => {
    try {
        const savedIdeas = await getSavedIdeas();
        const updatedIdeas = savedIdeas.filter(i => i.title !== title);
        
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIdeas));
        return true;
    } catch (e) {
        console.error("Failed to remove idea", e);
        return false;
    }
}

// Check if an idea is already saved
export const isIdeaSaved = async (title: string): Promise<boolean> => {
    try {
        const savedIdeas = await getSavedIdeas();
        return savedIdeas.some(i => i.title === title);
    } catch (e) {
        console.error("Failed to check if idea is saved", e);
        return false;
    }
}
