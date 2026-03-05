package com.project.ai.stock.controller;

import com.project.ai.dto.ApiResponse;
import com.project.ai.dto.StockSummaryResponse;
import com.project.ai.stock.service.StockService;
import jakarta.validation.constraints.NotBlank;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stocks")
@Validated
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping
    public ApiResponse<StockSummaryResponse> getStock(
            @RequestParam
            @NotBlank(message = "Stock symbol is required")
            String symbol
    ) {
        StockSummaryResponse response =
                stockService.getStockWithExplanation(symbol.toUpperCase());

        return new ApiResponse<>(200, response);
    }
}