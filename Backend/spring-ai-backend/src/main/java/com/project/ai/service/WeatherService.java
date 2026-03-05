package com.project.ai.service;

import com.project.ai.dto.WeatherResponse;
import com.project.ai.dto.WeatherSummaryResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private static final Logger logger = LoggerFactory.getLogger(WeatherService.class);

    private final RestTemplate restTemplate;
    private final ChatClient chatClient;

    public WeatherService(RestTemplate restTemplate, ChatClient chatClient) {
        this.restTemplate = restTemplate;
        this.chatClient = chatClient;
    }

    public WeatherSummaryResponse getWeatherWithExplanation(double lat, double lon) {

        logger.info("Fetching weather data for lat={}, lon={}", lat, lon);

        String url = String.format(
                "https://api.open-meteo.com/v1/forecast?latitude=%f&longitude=%f&current_weather=true",
                lat, lon
        );

        WeatherResponse response = restTemplate.getForObject(url, WeatherResponse.class);

        if (response == null || response.getCurrentWeather() == null) {
            logger.error("Weather API returned null response for lat={}, lon={}", lat, lon);
            throw new RuntimeException("Unable to fetch weather data");
        }

        double temperature = response.getCurrentWeather().getTemperature();
        double windspeed = response.getCurrentWeather().getWindspeed();
        int weatherCode = response.getCurrentWeather().getWeathercode();

        logger.info("Weather API response received: temp={}, windspeed={}, code={}",
                temperature, windspeed, weatherCode);

        String prompt = String.format(
                "Explain the current weather in simple terms. Temperature: %.2f°C, Wind Speed: %.2f km/h, Weather Code: %d.",
                temperature, windspeed, weatherCode
        );

        String explanation;

        try {
            logger.info("Calling AI for weather explanation");
            explanation = chatClient
                    .prompt()
                    .user(prompt)
                    .call()
                    .content();
        } catch (Exception e) {
            logger.error("AI explanation failed", e);
            explanation = "AI explanation currently unavailable.";
        }

        return new WeatherSummaryResponse(
                temperature,
                windspeed,
                weatherCode,
                explanation
        );
    }
}