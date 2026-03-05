package com.project.ai.dto;

public class StockSummaryResponse {

    private String symbol;
    private double price;
    private double change;
    private double changePercent;
    private long volume;
    private String aiExplanation;

    public StockSummaryResponse(String symbol,
                                double price,
                                double change,
                                double changePercent,
                                long volume,
                                String aiExplanation) {
        this.symbol = symbol;
        this.price = price;
        this.change = change;
        this.changePercent = changePercent;
        this.volume = volume;
        this.aiExplanation = aiExplanation;
    }

    public String getSymbol() {
        return symbol;
    }

    public double getPrice() {
        return price;
    }

    public double getChange() {
        return change;
    }

    public double getChangePercent() {
        return changePercent;
    }

    public long getVolume() {
        return volume;
    }

    public String getAiExplanation() {
        return aiExplanation;
    }
}