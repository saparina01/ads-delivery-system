package com.ads_delivery.service;

import com.ads_delivery.entity.Ads;

import java.util.List;

public interface AdsService {
    List<Ads> listAll();//管理员查看：可查看数据库所有广告所有信息
    boolean upload(Ads ads);//广告主增加：上传广告
    List<Ads> getRecommendedAds(String userId,int limit);//网站主通过查找tag个性化推荐
    boolean delete(String adId);//广告主删除：listForUser可视化后，点击按钮删除，给id参数，管理员同理
    List<Ads>  listForUser(String username);//广告主查看：belong_username获取对应广告所有要素，数据库用groupby
    void clickCount(String adId);//网站主返回的用户数据抽取对应广告id（用户画像）

}
