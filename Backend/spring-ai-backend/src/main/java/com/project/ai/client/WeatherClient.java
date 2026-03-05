package com.project.ai.client;

import com.project.ai.dto.WeatherResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class WeatherClient {

    private final WebClient webClient;

    public WeatherClient(WebClient.Builder builder) {
        this.webClient = builder
                .baseUrl("https://api.open-meteo.com/v1")
                .build();
    }

    public WeatherResponse getCurrentWeather(double latitude, double longitude) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/forecast")
                        .queryParam("latitude", latitude)
                        .queryParam("longitude", longitude)
                        .queryParam("current_weather", true)
                        .build())
                .retrieve()
                .bodyToMono(WeatherResponse.class)
                .block();  // Blocking for simplicity in this demo
    }
}