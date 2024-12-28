package com.example.newsweb.service;

import com.example.newsweb.dao.NewsDAO;
import com.example.newsweb.model.News;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {
    private final NewsDAO newsDAO;
    public NewsService(NewsDAO newsDAO) {
        this.newsDAO = newsDAO;
    }

    public List<News> getNewsList(int limit, String category) {
        return newsDAO.getNewsList(limit, category);
    }
}