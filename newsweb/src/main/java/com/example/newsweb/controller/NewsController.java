package com.example.newsweb.controller;

import com.example.newsweb.model.News;
import com.example.newsweb.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class NewsController {

    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    // 获取新闻列表，支持按分类过滤
    @GetMapping("/news")
    public List<News> getNews(
            @RequestParam(required = false) String category,
            @RequestParam(defaultValue = "8") int limit
    ) {
        return newsService.getNewsList(limit, category);
    }

    // 基于关键词从后端搜索新闻
    @GetMapping("/news/search")
    public List<News> searchNews(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "5") int limit) {
        return newsService.searchNewsByKeyword(keyword, limit);
    }
}
