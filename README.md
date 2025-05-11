# PAGE2SCREEN 🎬📚

A modern web platform that bridges literary and cinematic experiences. Built with React.js + TypeScript (frontend) and Node.js (backend), featuring AI-powered recommendations and interactive features.

![Tech Stack](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## ✨ Features
- AI-powered book/movie recommendations
- Interactive chat interface
- User profile management
- Search functionality for media
- Explainable AI (XAI) integration
- Tailwind CSS styling

## 🚀 Getting Started

### Prerequisites
- Node.js ≥16.x
- npm ≥9.x

### Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/PAGE2SCREEN.git
```
2. Install dependencies:

```bash
npm install
```

3. Start backend server:

```bash
cd backend
npm install
node server.js
```

4. Start frontend development server:

```bash
npm run dev -- --host
```

📂 Project Structure
```
PAGE2SCREEN/
├── .bolt/
├── backend/
│   ├── ai/               # AI modules
│   ├── data/             # JSON databases
│   ├── routes/           # API endpoints
│   ├── db.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js         # Main server file
│
├──data/
├── src/
│   ├── components/ 
│   │   └── Header.tsx
│   ├── pages/ 
│   │   ├── ChatAI.tsx        
│   │   ├── Home.tsx  
│   │   ├── Profile.tsx  
│   │   └── Search.tsx     
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js # Tailwind setup
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts # Vite configuration
```

🛠️ Scripts
```
Frontend:

dev: Start Vite development server

build: Create production build

lint: Run ESLint checks

Backend:

dev: Start Node server with nodemon

start: Launch production server
```

🔧 Configuration
```
Edit tailwind.config.js for styling customization

Modify books.json/movies.json to update media database

Adjust recommendationEngine.js for AI model settings
```

📦 Dependencies
```
Frontend:

React 18

TypeScript 5

Tailwind CSS

Vite

Backend:

Express.js
```

# 🧠 Design Reflection and Ethics

## 1. Human-Centered Design Principles

The design of **Page2Screen** followed key human-computer interaction (HCI) principles such as:

- **Consistency & Feedback**: Pages (e.g., `Search.tsx`, `ChatAI.tsx`) use a predictable layout with consistent styling (via Tailwind CSS) and immediate feedback (e.g., loading states or empty results).
- **User Control & Freedom**: Users can freely navigate between searching, chatting with the AI, and browsing profiles, which supports Norman’s usability heuristics.
- **Minimalism**: The interface emphasizes essential content, reducing clutter and cognitive load.

**References:**  
- Don Norman (2013), *The Design of Everyday Things*  
- Ben Shneiderman's *Eight Golden Rules of Interface Design*

## 2. Interpretability & Explainability (XAI)

The backend includes a module `xaiModule.js`, which aims to **explain recommendations** to users by highlighting key features (e.g., genre overlap, author similarity). This supports:

- **Transparency**: Users can understand *why* a book/movie is recommended.
- **Trust-building**: Explainability increases confidence in AI outputs.

**References:**  
- Ribeiro et al. (2016), *“Why Should I Trust You?”: Explaining the Predictions of Any Classifier*  
- Miller (2019), *"Explanation in Artificial Intelligence: Insights from the Social Sciences"*

## 3. Usability & Accessibility

While the system follows good UI conventions, improvements are planned to meet WCAG guidelines:

- Keyboard navigation and screen reader support (WAI-ARIA).
- Contrast improvements for better visibility.
- Responsive design for mobile devices.

**Reference:**  
- *Web Content Accessibility Guidelines (WCAG) 2.1*

## 4. Ethical Considerations

We identified and addressed several ethical dimensions:

- **Bias Awareness**: The AI model works on curated datasets (`books.json`, `movies.json`), minimizing cultural or popularity bias.
- **Data Privacy**: No user tracking or personal data collection is implemented.
- **Informed Recommendations**: By showing XAI rationales, users are empowered to question or override suggestions.

**References:**  
- Friedman & Nissenbaum (1996), *Bias in computer systems*  
- Jobin, Ienca & Vayena (2019), *The global landscape of AI ethics guidelines*

## 5. Lessons Learned

Throughout development, we learned that:

- Designing interpretable AI is as much about **communication** as computation.
- Users value **control and explanation** more than pure prediction accuracy.
- Balancing simplicity with functionality is a recurring challenge in HCI design.

## 🔍 Next Steps

- Incorporate user testing sessions for feedback.
- Add error boundaries and fallback messaging.
- Expand explainability with visual cues (e.g., score bars, similarity maps).


XAI Module

Recommendation Engine
```
