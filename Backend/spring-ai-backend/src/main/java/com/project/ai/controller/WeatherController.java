package com.project.ai.controller;

import com.project.ai.dto.ApiResponse;
import com.project.ai.dto.WeatherSummaryResponse;
import com.project.ai.service.WeatherService;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/weather")
@Validated
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public ApiResponse<WeatherSummaryResponse> getWeather(
            @RequestParam
            @NotNull(message = "Latitude is required")
            @DecimalMin(value = "-90.0")
            @DecimalMax(value = "90.0")
            Double lat,

            @RequestParam
            @NotNull(message = "Longitude is required")
            @DecimalMin(value = "-180.0")
            @DecimalMax(value = "180.0")
            Double lon
    ) {
        WeatherSummaryResponse response =
                weatherService.getWeatherWithExplanation(lat, lon);

        return new ApiResponse<>(200, response);
    }
}