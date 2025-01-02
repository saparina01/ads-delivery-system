package com.example.product.Controller;

import com.example.product.Model.UserBehavior;
import com.example.product.Service.BehaviorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/behavior")
public class BehaviorController {

    @Autowired
    private BehaviorService behaviorService;

    @PostMapping("/upload")
    public String uploadBehavior(@RequestBody UserBehavior userBehavior) {
        // 处理用户行为并更新分数
        behaviorService.processUserBehavior(userBehavior);
        return "行为数据已成功上传并处理";
    }
}
