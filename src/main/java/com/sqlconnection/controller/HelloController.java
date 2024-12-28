package com.sqlconnection.controller;

import com.sqlconnection.entity.Message;
import com.sqlconnection.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/ads/recommend")
@CrossOrigin
class HelloController {
    @Autowired
    MessageService messageService;

    @GetMapping()
    public List<Message> selectlist(){
        System.out.println(messageService.listall());
        return messageService.listall();
    }
}

