# AI Idea Lab
----------------------------------------------------------------------------------------------------------------------------
AI Idea Lab is a minimal mobile application designed to help users discover, explore, and save project, startup, and application ideas in a simple and structured way. The app focuses on clean design and smooth interaction, allowing users to quickly move from browsing ideas to understanding and storing them.

---

## Screenshots

### Home Screen
![Home Screen](images/home.png)

### Category / Swipe Screen
![Category Screen](images/contents.png)

### Result Screen
![Result Screen](images/result.png)

### Saved Ideas Screen
![Saved Screen](images/saved-idea.png)

### Search Screen
![Search Screen](images/search.png)

---

## Features
----------------------------------------------------------------------------------------------------------------------------
* Category-based browsing (Startup, AI, Student, etc.)
* Swipe navigation to explore ideas one at a time
* Search functionality with keyword and category filtering
* Detailed idea view with:
-
  * Title and description
  * Technologies used
  * Difficulty level
  * Scalability indicator
* Dynamic images fetched based on idea content
* Save ideas locally for offline access
* Dedicated saved ideas screen

## Tech Stack
----------------------------------------------------------------------------------------------------------------------------
* Frontend: React Native (Expo)
* Backend: Node.js, Express
* Database: MongoDB
* Image API: Unsplash

## Project Structure
----------------------------------------------------------------------------------------------------------------------------
```
Aidea-Lab/
├── frontend/
├── backend/
├── README.md
└── .gitignore
```

## Getting Started
----------------------------------------------------------------------------------------------------------------------------
### 1. Clone the repository
----------------------------------------------------------------------------------------------------------------------------
```
git clone https://github.com/your-username/Aidea-Lab.git
cd Aidea-Lab
```
----------------------------------------------------------------------------------------------------------------------------
### 2. Install dependencies
----------------------------------------------------------------------------------------------------------------------------
Frontend:
----------------------------------------------------------------------------------------------------------------------------
```
cd frontend
npm install
```
----------------------------------------------------------------------------------------------------------------------------
Backend:
----------------------------------------------------------------------------------------------------------------------------
```
cd backend
npm install
```
----------------------------------------------------------------------------------------------------------------------------
### 3. Setup environment variables
----------------------------------------------------------------------------------------------------------------------------
Create a `.env` file in the backend folder and add:

```
UNSPLASH_KEY=your_unsplash_access_key
```

### 4. Run the project
----------------------------------------------------------------------------------------------------------------------------
Backend:

```
npm start
```

Frontend:

```
npx expo start
```

## Future Improvements
----------------------------------------------------------------------------------------------------------------------------
* AI-powered idea generation and validation
* User authentication and cloud sync
* Improved recommendation system
* Idea sharing and collaboration features

## Status
----------------------------------------------------------------------------------------------------------------------------
This project is currently in the MVP stage and actively being improved.

## License
----------------------------------------------------------------------------------------------------------------------------
This project is open-source and available for learning and development purposes.
