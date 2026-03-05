# Spring AI Stock & Weather Analysis Application

A full-stack application that integrates **Stock Market data** and **Weather information** with **AI-powered explanations** using **Spring AI**.
The system fetches real-time data from external APIs and uses an AI model to generate human-readable insights.

This project demonstrates how modern applications can combine **external APIs, AI services, and a full-stack architecture** to deliver intelligent insights to users.

---

## Project Architecture

The project is divided into two main parts:

```
spring-ai-stock-weather-app
│
├── backend
│   └── spring-ai-backend
│
└── frontend
    └── spring-ai-frontend
```

### Backend

The backend is built with **Spring Boot** and **Spring AI**.
It handles:

* API calls to fetch **stock market data**
* API calls to fetch **weather information**
* AI-powered explanation generation
* REST API endpoints for the frontend

### Frontend

The frontend provides a **user interface** that allows users to:

* View stock data
* View weather information
* Read AI-generated explanations of the data

---

## Features

* Fetch **real-time stock data**
* Fetch **weather data from external APIs**
* Generate **AI-powered explanations**
* Clean **REST API architecture**
* Full-stack integration between frontend and backend
* Demonstrates practical usage of **Spring AI**

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring AI
* REST APIs
* Maven

### Frontend

* Modern JavaScript framework
* REST API integration
* Responsive UI

### External Services

* Stock Data API
* Weather Data API
* AI model via Spring AI

---

## How It Works

1. The frontend sends a request to the backend.
2. The backend calls external APIs to fetch:

   * Stock data
   * Weather information
3. The backend sends this data to the **AI model through Spring AI**.
4. The AI generates a **natural language explanation**.
5. The backend returns the structured response to the frontend.
6. The frontend displays the results to the user.

---

## Example Response

```
{
  "symbol": "JPM",
  "price": 300.3,
  "change": -5.83,
  "changePercent": -1.90,
  "volume": 18491333,
  "aiExplanation": "The stock has experienced a slight decline today..."
}
```

---

## Getting Started

### Clone the repository

```
git clone https://github.com/YOUR_USERNAME/spring-ai-stock-weather-app.git
```

### Run Backend

```
cd backend/spring-ai-backend
mvn spring-boot:run
```

### Run Frontend

```
cd frontend/spring-ai-frontend
npm install
npm run dev
```

---

## Learning Objectives

This project demonstrates:

* Integration of **AI into backend services**
* Building **AI-powered REST APIs**
* Combining **multiple external APIs**
* Designing a **full-stack AI application**

---

## Author

Developed as a learning project exploring **Spring AI integration in modern full-stack applications**.
