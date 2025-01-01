package com.example.product.Controller;

import com.example.product.Entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class HelloController {
    @RequestMapping(value = "/hello",method = RequestMethod.POST)
    public String hello(@RequestParam(value = "nickname",required = false) String name){
        return "你好"+name;
    }
    @RequestMapping(value = "/hello1",method = RequestMethod.POST)
    public String hello1(@RequestBody User user){
        System.out.println(user.getName());
       return user.getName();
    }
}
//@PathVariable