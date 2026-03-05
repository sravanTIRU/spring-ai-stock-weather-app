# Spring AI Demo Dashboard – Frontend

A modern React dashboard that integrates with a Spring Boot backend to display **AI-powered weather and stock insights**.

This project demonstrates how a frontend application can consume deterministic APIs and augment the results with **AI-generated explanations using Spring AI**.

---

## Overview

The dashboard provides two main features:

**Weather Intelligence**

- Fetch real-time weather data using geographic coordinates
- Display temperature, wind speed, and weather code
- Show AI-generated explanations for weather conditions

**Stock Intelligence**

- Fetch stock market data using a ticker symbol
- Display price, change, change percentage, and volume
- Show AI-generated explanations for stock movement

The frontend communicates with a **Spring Boot backend** that aggregates external APIs and generates AI explanations.

---

## Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- Axios
- Lucide Icons

---

## Architecture

```
Frontend (React)
       │
       ▼
Axios API Layer
       │
       ▼
Spring Boot Backend
       │
       ├── Weather API (Open-Meteo)
       ├── Stock API (AlphaVantage)
       └── AI Explanation (Spring AI)
```

The frontend is responsible for:

- UI rendering
- User interaction
- API requests
- Error and loading state handling

The backend handles:

- External API integration
- Data aggregation
- AI-generated explanations

---

## Project Structure

```
src
│
├── api
│   ├── axiosConfig.ts
│   ├── weatherApi.ts
│   └── stockApi.ts
│
├── components
│   ├── common
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ErrorAlert.tsx
│   │   ├── Loader.tsx
│   │   ├── Input.tsx
│   │   └── StatusBar.tsx
│   │
│   ├── weather
│   │   ├── WeatherForm.tsx
│   │   └── WeatherCard.tsx
│   │
│   └── stocks
│       ├── StockForm.tsx
│       └── StockCard.tsx
│
├── hooks
│   └── useApi.ts
│
├── pages
│   └── Dashboard.tsx
│
└── main.tsx
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone <repository-url>
cd frontend
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Configure environment variables

Create a `.env` file in the project root.

```
VITE_API_BASE_URL=http://localhost:8080
```

This should point to the running **Spring Boot backend**.

---

### 4. Start the development server

```
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

## Backend Requirement

The frontend requires the **Spring Boot backend** to be running.

Backend default URL:

```
http://localhost:8080
```

Available endpoints:

```
GET /weather?lat={latitude}&lon={longitude}

GET /stocks?symbol={symbol}
```

Example:

```
/weather?lat=17.3850&lon=78.4867
/stocks?symbol=AAPL
```

---

## Features

- AI-powered weather insights
- AI-powered stock insights
- Responsive dashboard UI
- Loading indicators
- Error handling
- Clean layered architecture
- Reusable React components

---

## System Status Bar

The dashboard includes a **system status bar** displaying:

- Weather API status
- Stock API status
- AI service status

This simulates monitoring commonly seen in enterprise dashboards.

---

## Demo Workflow

```
User Input
     │
     ▼
React Form
     │
     ▼
Axios API Request
     │
     ▼
Spring Boot Backend
     │
     ├── Weather API
     ├── Stock API
     └── Spring AI
     │
     ▼
Formatted Response
     │
     ▼
React Dashboard
```

---

## Notes

If AI services are not configured, the backend gracefully returns:

```
AI explanation currently unavailable.
```

This ensures the application remains functional even if the AI provider is unavailable.

---

## Future Improvements

- Stock charts and historical data
- Authentication
- Theme switching (dark/light mode)
- Real-time API monitoring
- Deployment using Docker

---

## Author

Developed as part of a **Spring AI demo project** demonstrating integration between AI services and enterprise backend APIs.
