package com.ads_delivery.controller;

import com.ads_delivery.entity.User;
import com.ads_delivery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    // 注册用户
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return userService.register(user);
    }

    // 登录用户
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return userService.login(user);
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
