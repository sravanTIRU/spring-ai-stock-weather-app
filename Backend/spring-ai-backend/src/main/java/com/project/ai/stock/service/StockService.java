package com.project.ai.stock.service;

import com.project.ai.stock.client.AlphaVantageClient;
import com.project.ai.stock.dto.StockResponse;
import com.project.ai.dto.StockSummaryResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    private static final Logger logger = LoggerFactory.getLogger(StockService.class);

    private final AlphaVantageClient stockClient;
    private final ChatClient chatClient;

    public StockService(AlphaVantageClient stockClient, ChatClient chatClient) {
        this.stockClient = stockClient;
        this.chatClient = chatClient;
    }

    public StockSummaryResponse getStockWithExplanation(String symbol) {

        String normalizedSymbol = symbol.toUpperCase().trim();
        logger.info("Fetching stock data for symbol={}", normalizedSymbol);

        StockResponse response = stockClient.getStock(normalizedSymbol);

        if (response == null || response.getGlobalQuote() == null) {
            logger.error("Stock API returned null response for symbol={}", normalizedSymbol);
            throw new IllegalArgumentException(
                    "Stock data not found for symbol: " + normalizedSymbol
            );
        }

        StockResponse.GlobalQuote quote = response.getGlobalQuote();

        double price = parseDouble(quote.getPrice());
        double change = parseDouble(quote.getChange());
        double changePercent =
                parseDouble(quote.getChangePercent().replace("%", ""));
        long volume = parseLong(quote.getVolume());

        logger.info(
                "Stock API response: symbol={}, price={}, change={}, changePercent={}, volume={}",
                normalizedSymbol, price, change, changePercent, volume
        );

        String explanation = generateExplanation(
                normalizedSymbol, price, change, changePercent, volume
        );

        return new StockSummaryResponse(
                normalizedSymbol,
                price,
                change,
                changePercent,
                volume,
                explanation
        );
    }

    private String generateExplanation(String symbol,
                                       double price,
                                       double change,
                                       double changePercent,
                                       long volume) {

        String prompt = String.format(
                """
                Explain this stock performance in simple terms.
                Symbol: %s
                Price: %.2f
                Change: %.2f (%.2f%%)
                Volume: %d
                """,
                symbol, price, change, changePercent, volume
        );

        try {
            logger.info("Calling AI for stock explanation for symbol={}", symbol);
            return chatClient
                    .prompt()
                    .user(prompt)
                    .call()
                    .content();
        } catch (Exception e) {
            logger.error("AI stock explanation failed for symbol={}", symbol, e);
            return "AI explanation currently unavailable.";
        }
    }

    private double parseDouble(String value) {
        try {
            return Double.parseDouble(value);
        } catch (Exception e) {
            logger.warn("Failed to parse double value: {}", value);
            return 0.0;
        }
    }

    private long parseLong(String value) {
        try {
            return Long.parseLong(value);
        } catch (Exception e) {
            logger.warn("Failed to parse long value: {}", value);
            return 0L;
        }
    }
}