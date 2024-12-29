package com.ads_delivery.mapper;
import com.ads_delivery.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    User findByUsername(String username);
    void insertUser(User user);
}
