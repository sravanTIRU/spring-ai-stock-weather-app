# 🚀 Spring AI Demo Backend

A production-style backend project demonstrating hybrid architecture
where deterministic external APIs are enhanced using Generative AI,
while maintaining reliability and clean separation of concerns.

------------------------------------------------------------------------

## 📚 Table of Contents

-   Overview
-   Architecture
-   Tech Stack
-   Features
-   API Documentation
-   Environment Variables
-   Project Structure
-   Setup Instructions
-   Testing APIs
-   Error Handling Strategy
-   Logging Strategy
-   Design Philosophy
-   Future Improvements

------------------------------------------------------------------------

# 📌 Overview

This project demonstrates integration of Spring AI with deterministic
external APIs (Weather & Stock) using a clean layered backend
architecture.

The application:

-   Fetches real-time weather data (Open-Meteo)
-   Fetches live stock data (AlphaVantage)
-   Uses Spring AI (ChatClient) to generate natural-language
    explanations
-   Gracefully falls back if AI is unavailable
-   Uses environment variables for secure API configuration
-   Follows clean architecture principles

AI enhances the response --- but never blocks deterministic
functionality.

------------------------------------------------------------------------

# 🏗 Architecture

Controller → Service → Client → External APIs\
         ↓\
     Spring AI (ChatClient → OpenAI)

------------------------------------------------------------------------

# 🛠 Tech Stack

-   Java 21
-   Spring Boot 3.3.x
-   Spring AI
-   Maven
-   Open-Meteo API
-   AlphaVantage API
-   OpenAI API

------------------------------------------------------------------------

# 📡 API Documentation

## 🌤 Weather Endpoint

### Endpoint

`GET /weather?lat={latitude}&lon={longitude}`

### Example Request

``` bash
curl "http://localhost:8080/weather?lat=16.5&lon=80.6"
```

### Sample Response

``` json
{
  "timestamp": "2026-02-28T12:20:00",
  "status": 200,
  "data": {
    "temperature": 31.8,
    "windspeed": 9.2,
    "weatherCode": 2,
    "aiExplanation": "Clear weather with moderate wind..."
  }
}
```

------------------------------------------------------------------------

## 📈 Stock Endpoint

### Endpoint

`GET /stocks?symbol=AAPL`

### Example Request

``` bash
curl "http://localhost:8080/stocks?symbol=AAPL"
```

### Sample Response

``` json
{
  "timestamp": "2026-02-28T12:20:00",
  "status": 200,
  "data": {
    "symbol": "AAPL",
    "price": 264.18,
    "change": -8.77,
    "changePercent": -3.213,
    "volume": 72366505,
    "aiExplanation": "Apple stock is currently declining..."
  }
}
```

------------------------------------------------------------------------

# 🔐 Environment Variables

Variable Name          Required   Description
  ---------------------- ---------- ----------------------
OPENAI_API_KEY         Yes        OpenAI API key
ALPHAVANTAGE_API_KEY   Yes        AlphaVantage API key

------------------------------------------------------------------------

# 📂 Project Structure

    src/main/java/com/example/demo
    │
    ├── controller      # REST Controllers
    ├── service         # Business logic + AI integration
    ├── client          # External API clients
    ├── model           # DTOs
    ├── config          # Configuration classes
    └── exception       # Global exception handling

------------------------------------------------------------------------

# 🧩 Setup Instructions

## Clone the Repository

``` bash
git clone <your-repository-url>
cd spring-ai-demo
```

## Verify Java

``` bash
java -version
```

## Verify Maven

``` bash
mvn -version
```

## Set Environment Variables

### Windows (PowerShell)

``` powershell
setx OPENAI_API_KEY "your_openai_key"
setx ALPHAVANTAGE_API_KEY "your_alpha_key"
```

### Mac/Linux

``` bash
export OPENAI_API_KEY=your_openai_key
export ALPHAVANTAGE_API_KEY=your_alpha_key
```

## Build & Run

``` bash
mvn clean install
mvn spring-boot:run
```

Application runs at:

http://localhost:8080

------------------------------------------------------------------------

# 🛡 Error Handling Strategy

-   Validation errors → 400 Bad Request
-   External API failures → Logged internally
-   AI failures → Graceful fallback message returned
-   No stacktrace exposed to client
-   Centralized exception handling via @ControllerAdvice

------------------------------------------------------------------------

# 📊 Logging Strategy

-   Client layer logs external API calls
-   Service layer logs business logic and AI interactions
-   AI failures logged independently
-   Errors captured with structured logs

------------------------------------------------------------------------

# 🔮 Future Improvements

-   Add Redis caching
-   Add Swagger / OpenAPI documentation
-   Add Docker support
-   Add rate limiting
-   Add Resilience4j retry mechanism
-   Add unit & integration tests
-   Add CI/CD pipeline

------------------------------------------------------------------------

# 🏆 Why This Project Matters

This project demonstrates backend architecture maturity, clean layered
design, real-world API integration, and AI-enhanced systems built with
production-level thinking.
