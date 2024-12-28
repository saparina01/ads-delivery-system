package com.sqlconnection.mapper;

import com.sqlconnection.entity.Message;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface MessageMapper {
    List<Message> listAll();
}
