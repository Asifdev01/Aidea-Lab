const ideas = {
    startup: [
        {
            title: "Food Waste Sharing App",
            description: "Connect restaurants with NGOs",
            detailedDescription: "A real-time logistics dashboard that allows restaurants to list surplus food at the end of the day, allowing local NGOs to claim and distribute it to those in need instantly.",
            difficulty: "Medium",
            tech: "React, Node, MongoDB"
        },
        {
            title: "Skill Swap Platform",
            description: "Exchange skills without money",
            detailedDescription: "A community-driven marketplace where currency is replaced by time and expertise. Teach someone coding for an hour in exchange for a guitar lesson.",
            difficulty: "Hard",
            tech: "React Native, Firebase"
        },
        {
            title: "AI Learning Platform",
            description: "Generates roadmap, timetable & best resources for any topic",
            detailedDescription: "Stop getting lost in tutorial hell. Our AI analyzes your learning style and goal to generate a curated, step-by-step curriculum from across the web.",
            difficulty: "Hard",
            tech: "React, Node, AI API"
        },
        {
            title: "All-in-One Smart Calculator",
            description: "Multiple calculators (finance, health, study) in one app",
            detailedDescription: "Consolidate your digital tools into one powerful hub. From compound interest to BMI and scientific conversions, everything is one tap away.",
            difficulty: "Medium",
            tech: "React Native"
        },
        {
            title: "Context-Based Smart Reminder",
            description: "Triggers reminders based on location, apps, or behavior",
            detailedDescription: "Next-gen notification engine that reminds you to 'buy milk' when you are physically near a grocery store or 'drink water' after an hour of heavy social media usage.",
            difficulty: "Hard",
            tech: "React Native, Sensors API"
        },
        {
            title: "Truth Rating Platform",
            description: "Rates content authenticity using fact-check sources",
            detailedDescription: "Combat misinformation with a crowd-sourced and AI-verified platform that provides 'Truth Scores' for viral news and social media claims.",
            difficulty: "Hard",
            tech: "React, Node, AI"
        },
        {
            title: "Habit DNA Analyzer",
            description: "Analyzes habits and predicts behavior patterns",
            detailedDescription: "Go beyond simple tracking. Our software identifies routines and triggers, helping you understand the psychology behind your daily choices.",
            difficulty: "Hard",
            tech: "React Native, ML"
        },
        {
            title: "Fake Content Detector",
            description: "Detects fake news, images, or misleading content",
            detailedDescription: "Advanced forensic analysis for images and text, helping users identify deepfakes and AI-generated misinformation in seconds.",
            difficulty: "Hard",
            tech: "AI, Python, Node"
        },
        {
            title: "UPI Distributed Bank App",
            description: "Peer-to-peer banking with smart expense splitting",
            detailedDescription: "Reimagining personal finance with a focus on group dynamics, making split-billing and shared savings goals as easy as sending a text.",
            difficulty: "Very Hard",
            tech: "Fintech APIs, Node, React"
        },
        {
            title: "Hotel / Movie Booking Platform",
            description: "Simple booking system with clean UI",
            detailedDescription: "A masterclass in UI/UX for booking flows, focusing on high-speed seat selection and frictionless checkout experiences.",
            difficulty: "Medium",
            tech: "React, Node, MongoDB"
        },
        {
            title: "Movie Recommendation App",
            description: "Suggests movies based on mood and watch history",
            detailedDescription: "Using collaborative filtering and physiological indicators (optional) to suggest the perfect film for your current emotional state.",
            difficulty: "Medium",
            tech: "React, API"
        },
        {
            title: "Subscription Reminder App",
            description: "Tracks subscriptions and alerts before billing",
            detailedDescription: "Centralize your recurring expenses. Get notified 24 hours before a trial ends or a billing cycle renews to avoid unwanted charges.",
            difficulty: "Easy",
            tech: "React Native"
        }
    ],

    student: [
        {
            title: "Smart Attendance Tracker",
            description: "Track attendance with reminders",
            detailedDescription: "Never miss the 75% threshold again. Automatically log your geolocation at university and get alerts when your attendance is falling behind.",
            difficulty: "Easy",
            tech: "React Native"
        },
        {
            title: "Study Focus Timer with Blocking",
            description: "Pomodoro + app blocker for deep focus",
            detailedDescription: "Combine the Pomodoro technique with system-level app blocking to ensure your 'deep work' sessions remain completely distraction-free.",
            difficulty: "Medium",
            tech: "React Native"
        },
        {
            title: "Assignment Auto Planner",
            description: "Breaks assignments into daily tasks automatically",
            detailedDescription: "Input your syllabus and deadlines, and our algorithm distributes the workload over your available weeks to prevent last-minute cramming.",
            difficulty: "Medium",
            tech: "React, Node"
        }
    ],

    unique: [
        {
            title: "Decision Helper AI",
            description: "Helps choose between options using logic & priorities",
            detailedDescription: "A weighted decision matrix tool that helps you navigate complex choices by scoring pros and cons based on your personal priorities.",
            difficulty: "Medium",
            tech: "React, Node"
        },
        {
            title: "Digital Life Dashboard",
            description: "Tracks time spent across apps and gives insights",
            detailedDescription: "Quantify your digital life. See exactly where your time goes and set 'Digital Budgets' to reclaim your focus.",
            difficulty: "Hard",
            tech: "React Native"
        },
        {
            title: "Micro-Learning App",
            description: "Learn skills in 5-minute daily lessons",
            detailedDescription: "The Duolingo for everything. Learn photography, finance, or history through bite-sized, gamified 5-minute modules.",
            difficulty: "Medium",
            tech: "React"
        },
        {
            title: "Idea Evolution Tracker",
            description: "Track and improve ideas step-by-step",
            detailedDescription: "Versioning for your brain. Record early-stage concepts and watch them evolve as you add research, notes, and feasibility checks.",
            difficulty: "Medium",
            tech: "React, MongoDB"
        },
        {
            title: "Mood-Based Music & Content App",
            description: "Suggests content based on mood detection",
            detailedDescription: "Integrating with biometric data (like heart rate) to curate the perfect atmospheric playlist for your stress levels.",
            difficulty: "Hard",
            tech: "AI, APIs"
        },
        {
            title: "Local Problem Reporter",
            description: "Users report issues in their area with solutions",
            detailedDescription: "Crowdsourced city maintenance. Snap a photo of a pothole or broken light, and notify local authorities and neighbors instantly.",
            difficulty: "Medium",
            tech: "React Native, Maps API"
        },
        {
            title: "Daily Challenge Generator",
            description: "Gives users productivity or fitness challenges",
            detailedDescription: "Gamify your growth with one high-impact challenge every 24 hours, designed to push you out of your comfort zone.",
            difficulty: "Easy",
            tech: "React Native"
        },
        {
            title: "Minimal Finance Tracker",
            description: "Simple income-expense tracker with clean UI",
            detailedDescription: "Finance without the friction. A gesture-based interface for recording expenses that takes less than three seconds to use.",
            difficulty: "Easy",
            tech: "React"
        },
        {
            title: "Offline Knowledge Vault",
            description: "Save and organize useful content offline",
            detailedDescription: "Your personal, local Wikipedia. Save full articles and research papers for access even when you're completely off the grid.",
            difficulty: "Medium",
            tech: "React Native"
        },
        {
            title: "Voice Note to Action App",
            description: "Convert voice notes into tasks automatically",
            detailedDescription: "Dictate your thoughts and watch them turn into organized task lists and calendar events using natural language processing.",
            difficulty: "Hard",
            tech: "AI, Speech API"
        }
    ],

    ai: [
        {
            title: "AI Resume Improver",
            description: "Analyzes resume and suggests improvements for jobs",
            detailedDescription: "Leverage advanced Large Language Models to scan your resume for keyword alignment and industry standards, providing actionable feedback to increase your hireability.",
            difficulty: "Medium",
            tech: "React, Node, AI API"
        },
        {
            title: "AI Code Explainer",
            description: "Explains code in simple language for beginners",
            detailedDescription: "A developer's best friend that breaks down complex functions and logic into easy-to-understand plain English, perfect for junior devs and students.",
            difficulty: "Medium",
            tech: "React, OpenAI/Gemini API"
        },
        {
            title: "AI Study Planner",
            description: "Creates personalized study schedules based on goals",
            detailedDescription: "Input your exam date and current progress, and let AI build a dynamic, adaptive schedule that ensures you cover all topics efficiently.",
            difficulty: "Medium",
            tech: "React, Node, AI"
        },
        {
            title: "AI Note Summarizer",
            description: "Summarizes long notes into key points",
            detailedDescription: "Turn hours of lecture recordings or pages of notes into concise, structured bullet points using state-of-the-art summarization models.",
            difficulty: "Easy",
            tech: "React, AI API"
        },
        {
            title: "AI Chat-Based Learning App",
            description: "Learn any topic through conversation with AI",
            detailedDescription: "An interactive tutor that explains concepts through Socratic dialogue, ensuring deep understanding rather than just rote memorization.",
            difficulty: "Hard",
            tech: "React Native, AI API"
        },
        {
            title: "AI Bug Finder",
            description: "Detects errors in code and suggests fixes",
            detailedDescription: "An automated code review tool that identifies edge cases, logic errors, and security vulnerabilities before you even hit deploy.",
            difficulty: "Hard",
            tech: "AI, Node"
        },
        {
            title: "AI Content Rewriter",
            description: "Rewrites text in different tones (formal, simple, etc.)",
            detailedDescription: "Instantly adjust your writing to match your audience, whether you need to sound more professional for an email or casual for social media.",
            difficulty: "Easy",
            tech: "React, AI API"
        },
        {
            title: "AI Interview Trainer",
            description: "Simulates interviews and gives feedback",
            detailedDescription: "Practice your interview skills with an AI that mimics real HR questions and provides feedback on your responses and tone.",
            difficulty: "Hard",
            tech: "AI, Voice API"
        },
        {
            title: "AI Email Assistant",
            description: "Generates and replies to emails smartly",
            detailedDescription: "Save hours every week by letting AI draft context-aware replies and summaries for your incoming mail stack.",
            difficulty: "Medium",
            tech: "React, AI API"
        },
        {
            title: "AI Project Idea Generator",
            description: "Generates project ideas based on user interests",
            detailedDescription: "Combat programmer's block by generating tailored project concepts based on your current skill level and tech preferences.",
            difficulty: "Easy",
            tech: "React, AI API"
        }
    ],
    finance: [
        {
            title: "Smart Expense Splitter",
            description: "Split expenses with friends easily",
            detailedDescription: "Track group expenses, auto-calculate who owes whom, and simplify settlements for trips, roommates, or college events.",
            difficulty: "Easy",
            tech: "React Native, Node"
        },
        {
            title: "AI Budget Advisor",
            description: "Suggests smarter spending habits",
            detailedDescription: "Analyze your transactions and give personalized tips on saving money, cutting unnecessary expenses, and managing monthly budgets.",
            difficulty: "Medium",
            tech: "React, Node, AI API"
        }
    ],
    productivity: [
        {
            title: "Habit Heatmap Tracker",
            description: "Visual habit tracking system",
            detailedDescription: "Track daily habits with GitHub-style heatmaps to visualize consistency and motivate long streaks.",
            difficulty: "Easy",
            tech: "React"
        },
        {
            title: "AI Daily Planner",
            description: "Auto plans your day using AI",
            detailedDescription: "Enter your tasks and available time, and the app creates an optimized daily schedule based on priority and deadlines.",
            difficulty: "Medium",
            tech: "React, Node, AI API"
        }
    ],
    health: [
        {
            title: "Posture Reminder App",
            description: "Alerts when posture is bad",
            detailedDescription: "Uses device sensors or webcam to detect poor posture and reminds users to sit correctly during long study sessions.",
            difficulty: "Medium",
            tech: "React Native, ML"
        },
        {
            title: "Water Intake Tracker with Smart Alerts",
            description: "Reminds hydration based on activity",
            detailedDescription: "Adjusts water reminders based on weather, activity level, and daily routine for optimal hydration.",
            difficulty: "Easy",
            tech: "React Native"
        }
    ],
    entertainment: [
        {
            title: "Mood-Based Music Player",
            description: "Music based on your mood",
            detailedDescription: "Select or detect mood and automatically generate playlists tailored to emotional states.",
            difficulty: "Medium",
            tech: "React Native, Spotify API"
        },
        {
            title: "Watch Party App",
            description: "Watch videos with friends online",
            detailedDescription: "Sync video playback across users with chat and reactions for a shared viewing experience.",
            difficulty: "Hard",
            tech: "React, Node, WebSockets"
        }
    ],
    ecommerce: [
        {
            title: "Student Marketplace",
            description: "Buy/sell items inside college",
            detailedDescription: "Students can sell books, gadgets, and accessories within campus with secure chat and location filters.",
            difficulty: "Medium",
            tech: "React, Node, MongoDB"
        },
        {
            title: "Price Drop Notifier",
            description: "Track product prices online",
            detailedDescription: "Users add product links and get notified when prices drop on e-commerce platforms.",
            difficulty: "Medium",
            tech: "Node, Scraping API"
        }
    ],
    local: [
        {
            title: "Nearby Study Spots Finder",
            description: "Find quiet places to study",
            detailedDescription: "Locate libraries, cafes, or hidden quiet spots near you with ratings and crowd levels.",
            difficulty: "Easy",
            tech: "React Native, Maps API"
        },
        {
            title: "Real-Time Crowd Tracker",
            description: "Check crowded places live",
            detailedDescription: "Users update crowd levels at locations to help others avoid busy areas.",
            difficulty: "Medium",
            tech: "React Native, Firebase"
        }
    ],
    experimental: [
        {
            title: "Digital Mood Mirror",
            description: "Shows your emotional patterns",
            detailedDescription: "Analyzes your daily inputs and displays your emotional trends visually like a mirror of your mental state.",
            difficulty: "Medium",
            tech: "React, AI"
        },
        {
            title: "Future Self Chat",
            description: "Chat with your future self",
            detailedDescription: "Simulates a version of you 5 years ahead based on your current habits and goals.",
            difficulty: "Hard",
            tech: "AI, Node"
        }
    ],
    futureTech: [
        {
            title: "AR Navigation Assistant",
            description: "Directions using AR overlay",
            detailedDescription: "Use your phone camera to see arrows and directions overlaid in real-world navigation.",
            difficulty: "Hard",
            tech: "ARCore, React Native"
        },
        {
            title: "AI Personal Agent",
            description: "Acts on your behalf online",
            detailedDescription: "An AI that books tickets, replies to emails, and manages tasks automatically.",
            difficulty: "Hard",
            tech: "AI Agents, Node"
        }
    ],
    problemSolution: [
        {
            title: "Mess Food Feedback System",
            description: "Improve hostel food quality",
            detailedDescription: "Students rate meals daily and admins get analytics to improve food quality.",
            difficulty: "Easy",
            tech: "React, Node"
        }
    ],
    quickBuild: [
        {
            title: "Simple To-Do API",
            description: "Basic task manager backend",
            detailedDescription: "Create, update, delete tasks with a REST API for practice.",
            difficulty: "Easy",
            tech: "Node, Express"
        }
    ],
    solo: [
        {
            title: "Developer Portfolio Generator",
            description: "Auto-create portfolio sites",
            detailedDescription: "Enter details and generate a clean developer portfolio instantly.",
            difficulty: "Easy",
            tech: "React"
        }
    ],



};

exports.generateIdea = (category) => {
    const list = ideas[category];
    return list[Math.floor(Math.random() * list.length)];
};

exports.getHomeIdeas = () => {
    let allIdeas = [];
    Object.keys(ideas).forEach(category => {
        ideas[category].forEach(idea => {
            allIdeas.push({
                ...idea,
                categoryCode: category,
                displayCategory: category.toUpperCase()
            });
        });
    });
    return allIdeas;
};

exports.getSpecificIdea = (category, title) => {
    if (!ideas[category]) return null;
    return ideas[category].find(i => i.title === title);
};

exports.getAllIdeasByCategory = (category) => {
    if (!ideas[category]) return [];
    return ideas[category].map(idea => ({
        ...idea,
        categoryCode: category,
        displayCategory: category.toUpperCase()
    }));
};