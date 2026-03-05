package com.project.ai.dto;

public class WeatherSummaryResponse {

    private double temperature;
    private double windspeed;
    private int weatherCode;
    private String aiExplanation;

    public WeatherSummaryResponse(double temperature,
                                  double windspeed,
                                  int weatherCode,
                                  String aiExplanation) {
        this.temperature = temperature;
        this.windspeed = windspeed;
        this.weatherCode = weatherCode;
        this.aiExplanation = aiExplanation;
    }

    public double getTemperature() {
        return temperature;
    }

    public double getWindspeed() {
        return windspeed;
    }

    public int getWeatherCode() {
        return weatherCode;
    }

    public String getAiExplanation() {
        return aiExplanation;
    }
}