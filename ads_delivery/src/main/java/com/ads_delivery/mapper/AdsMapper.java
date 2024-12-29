package com.ads_delivery.mapper;

import com.ads_delivery.entity.Ads;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdsMapper {
    void add(Ads ads);
    void delete(int ad_id);
    void update(Ads ads);
    Ads getById(int ad_id);
    List<Ads> getAll();
    List<Ads> getByUsername(String belong_username);
    List<Ads> getByImage(String image);
    List<Ads> getByTags(String tags);
}
