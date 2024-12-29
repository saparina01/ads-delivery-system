package com.ads_delivery.mapper;

import com.ads_delivery.entity.UserBehavior;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserBehaviorMapper {
    void add(UserBehavior userBehavior);
    void delete(int id);
    void update(UserBehavior userBehavior);
    UserBehavior getById(int id);
    List<UserBehavior> getAll();
    List<UserBehavior> getByUserId(String userId);
}
