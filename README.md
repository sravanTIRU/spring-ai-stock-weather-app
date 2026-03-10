# Spring AI Weather & Stock Intelligence Dashboard

A full-stack application that combines **real-time Stock Market data**, **Weather information**, and **AI-generated insights** using **Spring AI** and a **local LLM powered by Ollama**.

The system fetches data from external APIs and uses an AI model to generate **human-readable explanations** that help users understand weather conditions and stock movements.

This project demonstrates how modern applications can integrate **external APIs, local AI models, and full-stack architecture** to deliver intelligent insights.

---

# Project Architecture

The project is organized into **backend** and **frontend** modules.

```
spring-ai-stock-weather-app
│
├── backend
│   └── spring-ai-backend
│
└── frontend
    └── spring-ai-frontend
```

---

# Backend

The backend is built using **Spring Boot** and **Spring AI**.

Responsibilities include:

• Fetching **real-time stock market data**
• Fetching **weather information** from external APIs
• Generating **AI-powered explanations using a local LLM**
• Exposing REST APIs for the frontend dashboard

The backend integrates with **Ollama** to run an AI model locally instead of relying on paid external AI services.

---

# Frontend

The frontend provides an interactive dashboard that allows users to:

• Search for **stock market information**
• Retrieve **weather data by location**
• View **AI-generated explanations** of the data
• Quickly select predefined locations and stocks

The UI is designed to be **clean, responsive, and easy to use**.

---

# Features

• Fetch **real-time stock data**
• Fetch **weather data from external APIs**
• Generate **AI-powered explanations locally**
• Predefined quick-select locations and stocks
• Modern responsive dashboard UI
• Full-stack integration between frontend and backend

---

# Tech Stack

## Backend

• Java
• Spring Boot
• Spring AI
• REST APIs
• Maven

## Frontend

• React
• TypeScript
• Vite
• Tailwind CSS
• Axios

## External Services

• Open-Meteo Weather API
• AlphaVantage Stock API

## AI Model

• Ollama
• Phi-3 local LLM

---

# How It Works

1. The frontend sends a request to the backend.

2. The backend retrieves data from external APIs:

   • Weather API
   • Stock Market API

3. The backend sends this data to the **AI model through Spring AI**.

4. The AI generates a **natural language explanation**.

5. The backend returns the structured response.

6. The frontend dashboard displays the results.

---

# Example API Response

```
{
  "symbol": "TSLA",
  "price": 398.68,
  "change": 1.95,
  "changePercent": 0.49,
  "volume": 67018911,
  "aiExplanation": "Tesla stock has slightly increased today..."
}
```

---

# Running AI Locally with Ollama

This project uses **Ollama with the Phi-3 model** to generate AI explanations locally.

This removes the need for **OpenAI API keys or paid AI services**.

---

# Install Ollama

Download and install Ollama from:

https://ollama.com/download

After installation, verify it is installed:

```
ollama --version
```

---

# Install the Phi-3 Model

Download the local model:

```
ollama run phi3
```

The download size is approximately **2.2 GB**.

Once installed, you can verify it:

```
ollama list
```

Expected output:

```
NAME    SIZE
phi3    ~2.2GB
```

Ollama runs a local AI server at:

```
http://localhost:11434
```

Spring AI connects to this server to generate explanations.

---

# Getting Started

## Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/spring-ai-stock-weather-app.git
```

---

## Run the Backend

```
cd backend/spring-ai-backend
mvn spring-boot:run
```

Make sure **Ollama is running locally** before starting the backend.

---

## Run the Frontend

```
cd frontend/spring-ai-frontend
npm install
npm run dev
```

Open the dashboard:

```
http://localhost:5173
```

---

# Learning Objectives

This project demonstrates:

• Integrating **AI into backend services**
• Using **Spring AI with local LLM models**
• Building **AI-powered REST APIs**
• Combining **multiple external APIs**
• Developing a **full-stack AI application**

---
