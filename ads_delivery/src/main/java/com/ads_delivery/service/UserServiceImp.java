package com.ads_delivery.service;

import com.ads_delivery.entity.User;
import com.ads_delivery.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public String register(User user) {
        // 检查用户名是否已存在
        if (userMapper.findByUsername(user.getUsername()) != null) {
            return "用户名已存在";
        }
        user.setRole("ADVERTISER");
//        user.setRole("SITE_OWNER");
        // 插入用户
        userMapper.insertUser(user);
        return "注册成功";
    }

    @Override
    public String login(User user) {
        // 根据用户名查找用户
        User existingUser = userMapper.findByUsername(user.getUsername());
        System.out.println("login");
        if (existingUser == null) {
            return "用户不存在";
        }

        // 校验密码
        if (!existingUser.getPassword().equals(user.getPassword())) {
            return "密码错误";
        }

        // 生成 JWT Token（示例中没有实际实现）
        return existingUser.getRole()+":"+existingUser.getUsername();
//        return "dummy-jwt-token";  // 这里可以使用 JWT 生成工具生成一个 token
    }
}
