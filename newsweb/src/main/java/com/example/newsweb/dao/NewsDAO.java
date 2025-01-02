package com.example.newsweb.dao;

import com.example.newsweb.model.News;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class NewsDAO {
    private final JdbcTemplate jdbcTemplate;

    public NewsDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // 查询新闻，支持分类
    public List<News> getNewsList(int limit, String category) {
        String sql;
        Object[] params;

        if (category != null && !category.trim().isEmpty()) {
            sql = "SELECT * FROM news WHERE category = ? ORDER BY id ASC LIMIT ?";
            params = new Object[]{category, limit};
        } else {
            sql = "SELECT * FROM news ORDER BY id ASC LIMIT ?";
            params = new Object[]{limit};
        }

        return jdbcTemplate.query(sql, params, new NewsRowMapper());
    }

    // 根据关键词搜索新闻
    public List<News> searchNewsByKeyword(String keyword, int limit) {
        String sql = "SELECT * FROM news WHERE title LIKE ? OR summary LIKE ? OR tag LIKE ? ORDER BY id DESC LIMIT ?";
        Object[] params = new Object[]{
                "%" + keyword + "%",
                "%" + keyword + "%",
                "%" + keyword + "%",
                limit
        };

        return jdbcTemplate.query(sql, params, new NewsRowMapper());
    }

    private static class NewsRowMapper implements RowMapper<News> {
        @Override
        public News mapRow(ResultSet rs, int rowNum) throws SQLException {
            News news = new News();
            news.setId(rs.getInt("id"));
            news.setTitle(rs.getString("title"));
            news.setImage(rs.getString("image"));
            news.setSummary(rs.getString("summary"));
            news.setDetails(rs.getString("details"));
            news.setCategory(rs.getString("category"));
            news.setTags(List.of(rs.getString("tag").split(",")));
            return news;
        }
    }
}