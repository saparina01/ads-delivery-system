package com.example.product;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 映射 /images/** 到 D:/JAVA/shopping/ 目录
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:D:/JAVA/shopping/");
    }
}

