# AI Mock Interview System

## 🚀 Overview

An AI-powered mock interview system designed to help developers practice technical interviews in real-time. Built with **Next.js, Tailwind CSS, Vapi, Firebase, and OpenAI**, this project delivers interactive coding and behavioral interview simulations using **free-tier tools**.

📍 [Figma Design](https://www.figma.com/design/fQwML51hBD6NRdXK08fcvP/Landit---AI-Interview-Platform?node-id=2-2&t=f3C4pzDSqSAlTXDA-1)

## ✨ Features

- **AI-driven mock interviews** (DSA, system design, behavioral questions)
- **Live voice interaction** using **Vapi** (OpenAI's Voice API alternative)
- **Code execution & evaluation** with built-in IDE
- **Firebase authentication & database for session tracking**
- **Next.js serverless functions for backend logic**
- **Tailwind-powered UI for a sleek, fast interface**

## 🛠 Tech Stack

- **Frontend**: TypeScript, React, Next.js, Tailwind CSS, Shadcn UI, Next.js App Router
- **AI & Voice API**: Vapi (free alternative to OpenAI's Voice API)
- **Authentication & DB**:
- **Backend Logic**: Next.js API Routes
- **Form Handling & Types Valdation**: Zod, React Hook Form

## 📦 Installation

```bash
# Clone the repo
git clone <https://github.com/jaytintran/joberit.git>
cd joberit

# Install dependencies
yarn install  # or npm install

# Set up environment variables (Firebase, Vapi API keys)
cp .env.example .env.local
# Fill in .env.local with your credentials

# Start the development server
yarn dev  # or npm run dev

```

## 🎯 Usage

1. **Sign in** using Firebase Authentication (Google/Auth provider)
2. **Choose interview type** (DSA, system design, or behavioral)
3. **Start the interview** and interact with AI in real-time via voice or text
4. **Receive feedback** on responses & solutions
5. **Track progress** in Firebase Firestore

## 🏗 Roadmap

- [ ] Improve AI response grading
- [ ] Add multiple coding question formats
- [ ] Support video-based mock interviews
- [ ] Generate detailed interview reports

## 🤝 Contributing

Pull requests are welcome! Feel free to open an issue for suggestions or improvements.

## 📜 License

MIT License. Feel free to use and modify!
