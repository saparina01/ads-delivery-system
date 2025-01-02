package com.ads_delivery.mapper;

import com.ads_delivery.entity.Ads;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdsMapper {
    void add(Ads ads);
    void delete(String adId);
    void update(Ads ads);
    void click(String adId);
    List<Ads> getAll();
    List<Ads> getByUsername(String belongUsername);
    List<Ads> getByImage(String image);
    List<Ads> getByTags(String tags); // 添加 tags 查询方法
}
