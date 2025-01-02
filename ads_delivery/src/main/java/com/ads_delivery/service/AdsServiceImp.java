package com.ads_delivery.service;

import com.ads_delivery.entity.Ads;
import com.ads_delivery.entity.UserBehavior;
import com.ads_delivery.mapper.AdsMapper;
import com.ads_delivery.mapper.UserBehaviorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AdsServiceImp implements AdsService{

    @Autowired
    private AdsMapper adsMapper;
    @Autowired
    private UserBehaviorMapper userBehaviorMapper;

    @Override
    public List<Ads> listAll() {
        return adsMapper.getAll();
    }

    @Override
    public boolean upload(Ads ads) {
        try{
            adsMapper.add(ads);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Ads> getRecommendedAds(String userId, int limit) {
        List<UserBehavior> userBehaviors = userBehaviorMapper.getByUserId(userId); // 获取用户行为
        List<String> tags = new ArrayList<>();
        Set<Ads> recommendedAdsSet = new HashSet<>(); // 使用 Set 来避免重复
        Set<Ads> resultAdsSet = new HashSet<>(); // 使用 Set 来避免重复
        Set<String> allTags = new HashSet<>();  // 使用 Set 去除重复标签

        // 获取所有标签
        for (UserBehavior userBehavior : userBehaviors) {
            tags.addAll(Arrays.asList(userBehavior.getTags().split(",")));
            System.out.println("tags: " + tags.size());
        }

        // 根据标签推荐广告
        for (String tag : tags) {
            System.out.println("tag: " + tag);
            recommendedAdsSet.addAll(adsMapper.getByTags(tag)); // 使用 Set 添加广告，自动去重
            System.out.println("recommendedAdsSet: " + recommendedAdsSet.size());
        }

        // 如果推荐广告数量少于 limit，从其他广告中随机抽取
        if (recommendedAdsSet.size() < limit) {
            // 找出未被推荐的广告
            Set<Ads> allAds = new HashSet<>(adsMapper.getAll()); // 获取所有广告
            allAds.removeAll(recommendedAdsSet); // 移除已推荐的广告

            // 从未被推荐的广告中随机抽取
            List<Ads> remainingAds = new ArrayList<>(allAds);
            Collections.shuffle(remainingAds); // 随机打乱剩余广告列表

            int remainingAdsNeeded = limit - recommendedAdsSet.size();
            for (int i = 0; i < remainingAdsNeeded && i < remainingAds.size(); i++) {
                recommendedAdsSet.add(remainingAds.get(i));  // 添加剩余的广告到推荐列表
            }
        }

        // 将推荐广告添加到 resultAdsSet，并保证结果广告数不超过 limit
        int count = 0;
        for (Ads ad : recommendedAdsSet) {
            if (count >= limit) break; // 如果达到了限制数量，跳出
            resultAdsSet.add(ad);
            count++;
        }

        // 将 resultAdsSet 转换为 List 返回结果
        return new ArrayList<>(resultAdsSet);
    }

    @Override
    public boolean delete(String adId) {
        try{
            adsMapper.delete(adId);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Ads> listForUser(String username) {
        return adsMapper.getByUsername(username);
    }

    @Override
    public void clickCount(String adId) {
        System.out.println(adId);
        adsMapper.click(adId);
        System.out.println(adsMapper.getAll());

    }

}
