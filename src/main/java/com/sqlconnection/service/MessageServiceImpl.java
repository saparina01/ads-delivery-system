package com.sqlconnection.service;

import com.sqlconnection.entity.Message;
import com.sqlconnection.mapper.MessageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageMapper messageMapper;

    @Override
    public List<Message> listall() {
        return messageMapper.listAll();
    }
}