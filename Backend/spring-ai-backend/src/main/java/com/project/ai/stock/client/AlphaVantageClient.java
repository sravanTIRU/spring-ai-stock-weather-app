package com.project.ai.stock.client;

import com.project.ai.stock.dto.StockResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class AlphaVantageClient {

    private static final Logger logger = LoggerFactory.getLogger(AlphaVantageClient.class);

    private final RestTemplate restTemplate;

    @Value("${stock.api.key}")
    private String apiKey;

    public AlphaVantageClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public StockResponse getStock(String symbol) {

        if (apiKey == null || apiKey.isBlank()) {
            logger.error("AlphaVantage API key is missing");
            throw new IllegalStateException("Stock API key not configured");
        }

        String url = String.format(
                "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=%s&apikey=%s",
                symbol,
                apiKey
        );

        logger.info("Calling AlphaVantage API for symbol={}", symbol);

        try {
            StockResponse response = restTemplate.getForObject(url, StockResponse.class);

            if (response == null) {
                logger.error("AlphaVantage returned null response for symbol={}", symbol);
            } else {
                logger.info("AlphaVantage response received for symbol={}", symbol);
            }

            return response;

        } catch (Exception e) {
            logger.error("AlphaVantage API call failed for symbol={}", symbol, e);
            throw e;
        }
    }
}