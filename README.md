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
3. Running the Application
3.1. Start backend server:

```bash
cd backend
node server.js
```

3.2. Start frontend development server:

```bash
npm run dev -- --host
```

📂 Project Structure
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

🛠️ Scripts
Frontend:

dev: Start Vite development server

build: Create production build

lint: Run ESLint checks

Backend:

dev: Start Node server with nodemon

start: Launch production server

🔧 Configuration
Edit tailwind.config.js for styling customization

Modify books.json/movies.json to update media database

Adjust recommendationEngine.js for AI model settings

📦 Dependencies
Frontend:

React 18

TypeScript 5

Tailwind CSS

Vite

Backend:

Express.js

XAI Module

Recommendation Engine
