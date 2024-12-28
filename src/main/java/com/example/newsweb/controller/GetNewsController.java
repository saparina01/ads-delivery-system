package com.example.newsweb.controller;

import com.example.newsweb.model.News;
import com.example.newsweb.service.NewsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin
public class GetNewsController {
    private final NewsService newsService;

    public GetNewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    public List<News> getNews(
            @RequestParam(required = false) String category,
            @RequestParam(defaultValue = "8") int limit
    ) {
        return newsService.getNewsList(limit, category);
    }
}