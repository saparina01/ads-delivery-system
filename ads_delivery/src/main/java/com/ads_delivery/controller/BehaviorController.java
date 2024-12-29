package com.ads_delivery.controller;

import com.ads_delivery.entity.UserBehavior;
import com.ads_delivery.service.UserBehaviorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/behavior")
public class BehaviorController {

    @Autowired
    private UserBehaviorService userBehaviorService;

    @PostMapping("/upload")
    public String uploadBehaviorData(@RequestBody UserBehavior userBehavior) {
        try {
            // 调用服务层将数据保存到数据库
            userBehaviorService.insertUserBehavior(userBehavior);
            return "Behavior data uploaded successfully.";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to upload behavior data.";
        }
    }
    @GetMapping("/test")
    public String test() {
        return "test";
    }
}

