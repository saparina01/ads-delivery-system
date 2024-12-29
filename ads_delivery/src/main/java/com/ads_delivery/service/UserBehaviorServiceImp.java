package com.ads_delivery.service;

import com.ads_delivery.entity.UserBehavior;
import com.ads_delivery.mapper.UserBehaviorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserBehaviorServiceImp implements UserBehaviorService {
    @Autowired
    UserBehaviorMapper userBehaviorMapper;

    @Override
    public boolean insertUserBehavior(UserBehavior userBehavior) {
//        click：用户点击行为（如点击商品或新闻）。2
//        view：用户浏览行为（如浏览商品详情页、新闻正文）。1
//        purchase：用户购买行为（仅适用于购物网站）。4
//        search：用户搜索行为（如搜索商品、新闻）3
        try{
            switch(userBehavior.getBehavior_type()){
                case "click":
                    userBehavior.setBehavior_weight(2);
                    break;
                case "purchase":
                    userBehavior.setBehavior_weight(4);
                    break;
                case "search":
                    userBehavior.setBehavior_weight(3);
                    break;
                case "view":
                    userBehavior.setBehavior_weight(1);
                    break;
                default:
                    userBehavior.setBehavior_weight(0);
                    break;
            }
            userBehaviorMapper.add(userBehavior);
            return true;
        }catch(Exception e){
            return false;
        }
    }

    @Override
    public List<UserBehavior> listAll() {
        return  userBehaviorMapper.getAll();
    }

    @Override
    public List<UserBehavior> getUserBehavior(String userid) {
        return userBehaviorMapper.getByUserId(userid);
    }

}
