package com.ads_delivery.service;

import com.ads_delivery.entity.UserBehavior;

import java.util.List;

public interface UserBehaviorService {
    void insertUserBehavior(UserBehavior userBehavior);//网站主插入
    List<UserBehavior> listAll();//管理员查看
    List<UserBehavior> getUserBehavior(String userid);//推流时查看对应用户的喜好
    //就暂时不允许广告主做任何查看了
}
